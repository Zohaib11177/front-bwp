import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";
import WordpressLoginAction from "Redux/V1/Sites/Features/WordpressLogin/WordpressLoginAction";
import Configs from "Configs";
import TwoWordsHelper from "Helpers/TwoWordsHelper";
import SiteScreenshotAction from "Redux/V1/Sites/Features/SiteScreenshot/SiteScreenshotAction";
import TextLimitHelper from "Helpers/TextLimitHelper";
import SiteListAction from "Redux/V1/Sites/Site/Get/SiteGetAction";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import "Assets/css/Responsive/SiteListResponsive.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/fontawesome-free-solid";
import BadgeComponent from "Components/UI/BadgeComponent";
import SiteBusiness from "Businesses/SiteBusiness";
import WpLoginComponent from "Components/Wordpress/WpLoginComponent";
import "Assets/css/sites.css";
class TableSiteList extends Component {
    state = {
        reload: true,
        screen_shot: `${Configs.public_url}/assets/img/wp-bold_1.png`,
    };

    componentDidMount = () => {
        if (this.state.reload) {
            const reload = setInterval(() => {
                const pendingSites = this.props.sites.site_list.filter(
                    (site) => {
                        return site.status === "launching";
                    }
                );
                if (pendingSites.length === 0) clearInterval(reload);
                else this.props.dispatch(SiteListAction.siteGet());
            }, 15000);
        }
    };
    siteScreenshotFunction = (identity, host) => {
        const data = {
            identity: identity,
        };
        this.props.dispatch(SiteScreenshotAction.siteScreenshot(data));
    };
    displaySite = () => {
        const sites = this.props.sites.site_list.map((site, index) => {
            const defaultBadgeColor = "#002544";
            return site.status !== "launching" ? (
                <tr
                    key={site.id}
                    className="site-list-main-wrapper site-launch-main"
                >
                    <td className="site-list-image">
                        <div className="webshot-wrapper">
                            <div
                                onClick={() =>
                                    this.siteScreenshotFunction(
                                        site.identity,
                                        site.primary_domain_name
                                    )
                                }
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Refresh Screenshot"
                            >
                                <svg
                                    fill="none"
                                    stroke="white"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 refresh-icon-sitelist"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    ></path>
                                </svg>{" "}
                                {site.cloud_provider === "GCP" ? (
                                    <div className="icon-cloud-provider">
                                        <img
                                            className="cloud-provider-google-icon"
                                            alt="webshot"
                                            src={`${Configs.public_url}/assets/img/General/google-icon.png`}
                                            width="30px"
                                        />
                                    </div>
                                ) : (
                                    <div className="icon-cloud-provider">
                                        <img
                                            className="cloud-provider-bolt-icon"
                                            alt="webshot"
                                            src={`${Configs.public_url}/assets/img/Brands/bolt.gif`}
                                            width="40px"
                                        />
                                    </div>
                                )}
                            </div>
                            <a
                                className="wpversion-link refresh-sitelist"
                                href={`/sites/${site.primary_domain_name}`}
                            >
                                <img
                                    alt="webshot"
                                    src={
                                        site.screen_shot
                                            ? site.screen_shot
                                            : `${Configs.public_url}/assets/img/General/wp-bold_1.png`
                                    }
                                    width="180px"
                                />
                            </a>
                        </div>{" "}
                    </td>
                    <td id="site-name-link">
                        <a
                            className="wpversion-link bionic-link"
                            href={`/sites/${site.primary_domain_name}`}
                        >
                            <h5 className="d-block text-dark mt-4 mb-0 font-weight-bold text-capitalize">
                                {TwoWordsHelper.extractTwo(site.name)}
                            </h5>
                            <div className="column-wrap primary-domain ext-link d-inline ">
                                {" "}
                                {site.primary_domain_name}{" "}
                            </div>
                        </a>
                        <Button
                            variant="link"
                            className="pencil-icon "
                            target="_blank"
                            href={"http://" + site.primary_domain_name}
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </Button>

                        <br />
                        <div className="site-type">
                            {SiteBusiness.tags(site)}

                            {Object.keys(site.staging).length > 0 ? (
                                <BadgeComponent
                                    className="mr-1 warning-badge-text  "
                                    text={
                                        site.staging.status !== "active"
                                            ? "Launching Staging"
                                            : "Staging"
                                    }
                                    link={`/sites/${site.staging.primary_domain}`}
                                    linkClass={
                                        site.staging.status !== "active"
                                            ? "event-none"
                                            : ""
                                    }
                                    color={
                                        site.staging.tag_color === null
                                            ? defaultBadgeColor
                                            : site.staging.tag_color
                                    }
                                />
                            ) : (
                                ""
                            )}
                            <br />
                            {site.site_delete_date ? (
                                <BadgeComponent
                                    className="badge-danger mt-1"
                                    linkClass="event-none-badge"
                                    text={`Site will be deleted at:
                                    ${TimeStampHelper.standardDateFormat(
                                        site.site_delete_date
                                    )}`}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </td>
                    <td id="columns-with-auto-width" className="td-responsive">
                        <p
                            id="ip-address columns-with-auto-width"
                            className="float-left mr-1 site-ip-address"
                        >
                            {site.ip_address}
                        </p>

                        {/* <button
                            id="columns-with-auto-width"
                            className="copyicon"
                            onClick={() =>
                                ClipBoardHelper.copy(site.ip_address)
                            }
                        >
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                alt="copyimage"
                            />
                        </button> */}
                    </td>
                    {/* <td className="text-center">{site.wp_current_version}</td> */}
                    <td className="text-center" id="columns-with-auto-width">
                        {TextLimitHelper.limit(site.location.toUpperCase(), 14)}
                    </td>
                    <td className="text-center" id="columns-with-auto-width">
                        {TimeStampHelper.standardDateFormat(site.backup)}
                    </td>

                    <td
                        className="text-center one-click-login"
                        id="columns-with-auto-width"
                    >
                        <WpLoginComponent
                            className="site-wordpress "
                            src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                            data-identity={site.identity}
                            onClickSvg={(e) => this.quickLogin(site.identity)}
                        />
                    </td>
                </tr>
            ) : (
                <tr
                    key={site.id}
                    className="site-list-main-wrapper no-site-launch-main"
                >
                    <td
                        className="site-list-image"
                        id="columns-with-auto-width"
                    >
                        <Link
                            className="wpversion-link"
                            // to={`/sites/${site.primary_domain_name}`}
                        >
                            <img
                                alt="webshot"
                                src={`${Configs.public_url}/assets/img/General/wp-bold_1.png`}
                                width="180px"
                            />
                        </Link>
                    </td>
                    <td id="site-name-link">
                        {/* <a className="wpversion-link" href={`/sites`}> */}
                        <h5 className="d-block text-dark mt-4 mb-2 font-weight-bold text-capitalize ">
                            {TwoWordsHelper.extractTwo(site.name)}
                        </h5>
                        <div className="launching-text">
                            {" "}
                            launching your site please wait a minute...{" "}
                        </div>
                    </td>
                    <td id="columns-with-auto-width" className=" td-responsive">
                        <p
                            id="ip-address"
                            className="float-left mr-1 site-ip-address"
                        >
                            {site.ip_address}
                        </p>

                        {/* <button className="copyicon">
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/General/copy.svg`}
                                alt="copyimage"
                            />
                        </button> */}
                    </td>
                    {/* <td className="tex-center">{site.wp_current_version}</td> */}
                    <td className="text-center" id="columns-with-auto-width">
                        {TextLimitHelper.limit(site.location.toUpperCase(), 14)}
                    </td>
                    <td id="columns-with-auto-width" className="no-data-text">
                        {TimeStampHelper.standardDateFormat(site.backup)}
                    </td>

                    <td className="text-center" id="columns-with-auto-width">
                        <ReactSVG
                            alt="wordpress"
                            className="site-wordpress"
                            src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                            data-identity={site.identity}
                        />
                    </td>
                </tr>
            );
        });
        return sites;
    };

    quickLogin = (identity) => {
        // const identity = e.target.getAttribute("data-identity");
        this.props.dispatch(WordpressLoginAction.wordpressLogin(identity));
    };

    render() {
        return (
            <Table className="table responsive table-line-height">
                <thead className="table-header table-header-border">
                    <tr>
                        <td></td>
                        <td>Domain</td>
                        <td>IP Address</td>
                        {/* <td>WP Version</td> */}
                        <td>Site Location</td>
                        <td>Date of Last backup</td>
                        {/* <td>TAGS</td> */}
                        <td>Quick Login</td>
                    </tr>
                </thead>
                <tbody className="table-background">{this.displaySite()}</tbody>
            </Table>
        );
    }
}

function mapStateToProps(state) {
    return {
        sites: state.site.site.list,
        pagination: state.site.site.list.pagination,
    };
}

export default connect(mapStateToProps)(TableSiteList);
