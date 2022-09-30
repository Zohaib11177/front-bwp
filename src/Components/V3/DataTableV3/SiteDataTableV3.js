import React, { Component } from "react";
import "Assets/css/V3/siteList.css";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Configs from "Configs";
import TimeStampHelper from "Helpers/TimeStampHelper";
import SiteLoginActionV6 from "Redux/V6/Sites/Site/SiteLogin/SiteLoginActionV6";
import SiteScreenshotAction from "Redux/V1/Sites/Features/SiteScreenshot/SiteScreenshotAction";
// import TwoWordsHelper from 'Helpers/TwoWordsHelper';
import SiteBusiness from "Businesses/SiteBusiness";
import BadgeComponent from "Components/UI/BadgeComponent";
import TemplateFull from "Templates/TemplateFull";
import linkIcon from "Assets/img/link-icon.svg";
// import twoColorBar from 'Assets/img/V3/rect-2.png';
// import fourColorBar from 'Assets/img/V3/rect-4.png';
import { connect } from "react-redux";
import SiteListActionV3 from "Redux/V3/Sites/SiteList/SiteListActionV3";
import WpLoginComponent from "Components/Wordpress/WpLoginComponent";
// import screenShot from "Assets/img/V3/circleImg.png"

class TableSiteListV3 extends Component {
    componentDidMount() {
        this.props.dispatch(SiteListActionV3.siteGetV3());
    }

    siteScreenshotFunction = (identity, host) => {
        const data = {
            identity: identity,
        };
        this.props.dispatch(SiteScreenshotAction.siteScreenshot(data));
    };

    displaySite = () => {
        const sites = this.props.site_list.map((site) => {
            const {
                cloud_provider,
                primary_domain_name,
                screen_shot,
                name,
                site_delete_date,
                created_at,
                planName,
                staging,
            } = site.site_info;
            return (
                <>
                    <ul
                        className={`${
                            cloud_provider === "GCP"
                                ? "four-colors"
                                : "tow-colors"
                        }`}
                    >
                        <li>
                            <div className="list-img">
                                <a href={`/sites/${primary_domain_name}`}>
                                    <img
                                        src={
                                            screen_shot
                                                ? screen_shot
                                                : `${Configs.public_url}/assets/img/General/wp-bold_1.png`
                                        }
                                        alt="circleImg"
                                    />
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href={`/sites/${primary_domain_name}`}>
                                <h4>{name}</h4>
                            </a>
                            <div className="link-wrap">
                                <a href={`/sites/${primary_domain_name}`}>
                                    <span>{primary_domain_name}</span>
                                </a>
                                <span
                                    className="cursor-pointer"
                                    onClick={() =>
                                        window.open(
                                            `https://${primary_domain_name}`,
                                            "_blank"
                                        )
                                    }
                                >
                                    <img
                                        src={linkIcon}
                                        className="link-icon-list"
                                        alt="linkIcon"
                                    />
                                </span>
                            </div>
                            <div className="badge-wrapper">
                                {SiteBusiness.tagsName(site.site_info)}
                                {Object.keys(staging).length > 0 ? (
                                    <span class="badge badge-text-color mr-1 font-12 bg-delete badge">
                                        Staging
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            {site_delete_date ? (
                                <div className="badge-wrapper">
                                    <BadgeComponent
                                        className="badge-danger font-12 mt-1"
                                        linkClass="event-none-badge"
                                        text={`Site will be deleted at:
                                            ${TimeStampHelper.standardDateFormat(
                                                site_delete_date
                                            )}`}
                                    />
                                </div>
                            ) : (
                                ""
                            )}
                        </li>
                        <li>
                            <span>
                                {site.site_location ? (
                                    <OverlayTrigger
                                        placement="bottom"
                                        delay={{
                                            show: 250,
                                            hide: 150,
                                        }}
                                        overlay={
                                            <Tooltip className="button-tooltip">
                                                <p>{site.site_location}</p>
                                            </Tooltip>
                                        }
                                    >
                                        <Button
                                            type="text"
                                            className="no-btn adj"
                                        >
                                            {site.site_location}
                                        </Button>
                                    </OverlayTrigger>
                                ) : (
                                    "No Location Available"
                                )}
                            </span>
                        </li>
                        <li>
                            <span>
                                {TimeStampHelper.standardDateFormat(created_at)}
                            </span>
                        </li>
                        <li>
                            <span>
                                {planName ? planName : "No Plan Available"}
                            </span>
                        </li>
                        <li>
                            <WpLoginComponent
                                className="no-btn adj"
                                src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                data-identity={site.identity}
                                onClickSvg={(e) =>
                                    this.quickLogin(primary_domain_name)
                                }
                            />
                        </li>
                    </ul>
                </>
            );
        });

        return sites;
    };

    quickLogin = (identity) => {
        // const identity = e.target.getAttribute("data-identity");
        this.props.dispatch(SiteLoginActionV6.siteLogin(identity));
    };

    render() {
        console.log("===>", this.props.site_list);
        return (
            <TemplateFull>
                <div className="row">
                    <div className="col-12">
                        <div className="site-list site-list-header">
                            <ul>
                                <li>Site Information</li>
                                <li>Domain</li>
                                <li>Location</li>
                                <li>Create Date</li>
                                <li>Plan</li>
                                <li>Quick Login</li>
                            </ul>
                        </div>
                        <div className="site-list site-list-content">
                            {this.displaySite()}
                        </div>
                    </div>
                </div>
            </TemplateFull>
        );
    }
}

function mapStateToProps(state) {
    return {
        site_list: state.siteV3.sitelistV3.site_list,
        pagination: state.siteV3.sitelistV3.pagination,
    };
}

export default connect(mapStateToProps)(TableSiteListV3);
