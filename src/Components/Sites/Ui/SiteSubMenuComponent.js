import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactSVG } from 'react-svg';
import Configs from 'Configs';
import TemplateSideRight from 'Templates/TemplateSidebarRight';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/fontawesome-free-solid";
import WordpressLoginAction from 'Redux/V1/Sites/Features/WordpressLogin/WordpressLoginAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SiteScreenshotAction from 'Redux/V1/Sites/Features/SiteScreenshot/SiteScreenshotAction';
import StagingEnvironment from 'Components/Staging/StagingEnvironmentComponent';
import SiteAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import ExternalLinkComponent from 'Components/UI/ExternalLinkComponent';
// import NoDataHelper from "Helpers/NoDataHelper";
import 'Assets/css/Responsive/SiteSubMenu.css';
import 'Assets/css/sitedetail.css';
// import "Assets/css/Responsive/SubMenu.css";
// import TemplateFull from "Templates/TemplateFull";
import SiteSubMenuComponentResponsive from 'Components/Sites/Ui/SiteSubMenuComponentResponsive';
import SiteBusiness from 'Businesses/SiteBusiness';
import WpLoginComponent from 'Components/Wordpress/WpLoginComponent';
// import StringHelper from "Helpers/StringHelper";
class SiteSubMenuComponent extends Component {
    componentDidMount() {
        this.props.dispatch(SiteAction.getSiteDetail(this.props.identity));
    }
    siteScreenshotFunction = () => {
        const data = {
            identity: this.props.site_detail.container.identity,
            host: this.props.identity,
        };
        this.props.dispatch(SiteScreenshotAction.siteScreenshot(data));
    };
    render() {
        const { primary_domain, container } = this.props.site_detail;
        const siteType = this.props.site_detail.site_type;
        // const tags = this.props.site_detail.tags;
        // console.log(tags, "sd");

        return (
            <React.Fragment>
                <Navbar className="sub-menu " expand="lg">
                    <Navbar.Toggle
                        aria-controls="submenu-navbar"
                        className="submenu-toggle"
                    />

                    <Navbar.Collapse id="submenu-navbar">
                        <div className="responsive-toggle-site-submenu">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                        <Nav className="mx-auto">
                            <Link
                                className={
                                    this.props.active === 'dashboard'
                                        ? 'active'
                                        : ''
                                }
                                to={`/sites/${this.props.identity}`}>
                                <span className="dashboard-icon">
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-dashboard-submenu.svg`}
                                        alt="gauge"
                                        className="submenu-img"
                                    />
                                </span>
                                Dashboard
                            </Link>
                            <Link
                                to={`/sites/updates/${this.props.identity}`}
                                className={
                                    this.props.active === 'update'
                                        ? 'active'
                                        : ''
                                }>
                                <span className="update-icon">
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-updates-submenu.svg`}
                                        alt="gauge"
                                        className="submenu-img"
                                    />
                                </span>
                                Updates
                            </Link>
                            {siteType !== 'staging' ? (
                                <Link
                                    className={
                                        this.props.active === 'domains'
                                            ? 'active'
                                            : ''
                                    }
                                    to={`/sites/domains/${this.props.identity}`}>
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-domain-submenu.svg`}
                                        alt="gauge"
                                        className="site-domain-submenu-icon"
                                    />
                                    Domains
                                </Link>
                            ) : (
                                ''
                            )}
                            <Link
                                className={
                                    this.props.active === 'backups'
                                        ? 'active'
                                        : ''
                                }
                                to={`/sites/backups/${this.props.identity}`}>
                                <span className="database-icon">
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-backup-submenu.svg`}
                                        alt="gauge"
                                        className="site-backup-submenu"
                                    />
                                </span>
                                Backups & Clone
                            </Link>
                            <Link
                                className={
                                    this.props.active === 'operations'
                                        ? 'active'
                                        : ''
                                }
                                to={`/sites/operations/${this.props.identity}`}>
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-operation-submenu.svg`}
                                    alt="gauge"
                                    className="submenu-img site-operation-icon"
                                />
                                Site Operation
                            </Link>
                            {siteType !== 'staging' ? (
                                <Link
                                    className={
                                        this.props.active === 'addons'
                                            ? 'active'
                                            : ''
                                    }
                                    to={`/sites/addons/${this.props.identity}`}>
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-addons-submenu.svg`}
                                        alt="gauge"
                                        className="submenu-img site-addons-submenu"
                                    />
                                    Addons
                                </Link>
                            ) : (
                                ''
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* *******  Responsive Site Sub-Menu Component  **********/}

                <SiteSubMenuComponentResponsive
                    active={this.props.active}
                    siteType={this.props.siteType}
                    SiteDetail={this.props.site_detail}
                    identity={this.props.identity}
                />

                <div className="mt-4">
                    <TemplateSideRight>
                        <div className="site-screenshot d-flex align-items-center submenu-content-responsive-main">
                            <div className="refresh refresh-main ">
                                <img
                                    src={`${
                                        this.props.site_detail.screen_shot
                                            ? this.props.site_detail.screen_shot
                                            : Configs.public_url +
                                              '/assets/img/General/wp-bold_1.png'
                                    }`}
                                    width="190px"
                                    alt=""
                                    className="submenu-res-image"
                                />

                                <Link
                                    onClick={this.siteScreenshotFunction}
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Screenshot"
                                    className="refresh-link-main">
                                    <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        stroke="white"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="refresh-icon">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                    </svg>{' '}
                                </Link>
                                {this.props.site_detail.container
                                    .cloud_provider === 'GCP' ? (
                                    <img
                                        className="cloud-provider-google-icon"
                                        alt="webshot"
                                        src={`${Configs.public_url}/assets/img/General/google-icon.png`}
                                        width="30px"
                                    />
                                ) : (
                                    <img
                                        className="cloud-provider-bolt-icon"
                                        alt="webshot"
                                        src={`${Configs.public_url}/assets/img/Brands/bolt.gif`}
                                        width="40px"
                                    />
                                )}
                            </div>
                            <div className="external-link-main ">
                                <ExternalLinkComponent
                                    className="site-url "
                                    linkText={primary_domain}
                                    externalLink={'http://' + primary_domain}
                                    badge="success"
                                />
                                {/* {NoDataHelper.available(site_detail.loading)} */}
                                {/* <Link to={`/sites/${site.primary_domain_name}`}> */}
                                {/* </Link> */}
                                <div className="site-env-badge">
                                    {SiteBusiness.tags(this.props.site_detail)}
                                </div>
                            </div>{' '}
                            {/* <div className="site-url">
                                {TextLimitHelper.limit(primary_domain, 30)}
                                <Button
                                variant="link"
                                className="pencil-icon"
                                target="_blank"
                                href={"http://" + primary_domain}
                                >
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </Button>
                            </div> */}
                        </div>

                        <div className="site-admin d-flex align-items-center justify-content-end environment-dropdown-submenu-responsive">
                            <img
                                src={`${Configs.public_url}/assets/img/cog-settings.png`}
                                alt=""
                                className="d-none"
                            />

                            <StagingEnvironment
                                siteDetail={this.props.site_detail}
                            />
                            <WpLoginComponent
                                src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                alt="wordpresswhite"
                                onClick={() =>
                                    this.props.dispatch(
                                        WordpressLoginAction.wordpressLogin(
                                            container.identity
                                        )
                                    )
                                }
                                className={`wpadmin-btn wp-admin bionic-btn submenu-oneclick-login-icon ${
                                    this.props.wordpressLogin.loading
                                        ? 'loading'
                                        : ''
                                }`}
                                classNameReactSVG="one-click-svg"
                                text="WP Admin"
                            />
                        </div>
                    </TemplateSideRight>
                </div>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        site_detail: state.SiteDetailReducer.site_detail,
        wordpressLogin: state.site.feature.wordpressLogin,
    };
}
export default connect(mapStateToProps)(SiteSubMenuComponent);
