import React, { Component } from "react";
// import { Carousel } from "react-bootstrap";
import "Assets/css/Responsive/SubMenu.css";
// import TemplateFull from "Templates/TemplateFull";
import { Link } from "react-router-dom";
import Configs from "Configs";
import { ReactSVG } from "react-svg";
import "Assets/css/sitedetail.css";

class SiteSubMenuComponentResponsive extends Component {
    render() {
        const siteType = this.props.SiteDetail.site_type;
        const identity = this.props.identity;

        return (
            <React.Fragment>
                <div class="scrollmenu">
                    <Link
                        className={
                            this.props.active === "dashboard" ? "active" : ""
                        }
                        to={`/sites/${identity}`}
                    >
                        <span className="dashboard-icon">
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-dashboard-submenu.svg`}
                                alt="gauge"
                                className={`submenu-img ${
                                    this.props.active === "dashboard"
                                        ? "active"
                                        : ""
                                }`}
                            />
                        </span>
                        Dashboard
                    </Link>

                    <Link
                        to={`/sites/updates/${identity}`}
                        className={
                            this.props.active === "update" ? "active" : ""
                        }
                    >
                        {" "}
                        <span className="update-icon">
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-updates-submenu.svg`}
                                alt="gauge"
                                className={`submenu-img ${
                                    this.props.active === "update"
                                        ? "active"
                                        : ""
                                }`}
                            />
                        </span>
                        Updates
                    </Link>
                    {siteType !== "staging" ? (
                        <Link
                            to={`/sites/domains/${identity}`}
                            className={
                                this.props.active === "domains" ? "active" : ""
                            }
                        >
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-domain-submenu.svg`}
                                alt="gauge"
                                className={`submenu-img site-domain-submenu-icon ${
                                    this.props.active === "domains"
                                        ? "active"
                                        : ""
                                }`}
                            />
                            Domains
                        </Link>
                    ) : (
                        ""
                    )}
                    <Link
                        to={`/sites/backups/${identity}`}
                        className={
                            this.props.active === "backups" ? "active" : ""
                        }
                    >
                        <span className="database-icon">
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-backup-submenu.svg`}
                                alt="gauge"
                                className={`submenu-img site-backup-submenu ${
                                    this.props.active === "backups"
                                        ? "active"
                                        : ""
                                }`}
                            />
                        </span>
                        Backups & Clone
                    </Link>
                    <Link
                        to={`/sites/operations/${identity}`}
                        className={
                            this.props.active === "operations" ? "active" : ""
                        }
                    >
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-operation-submenu.svg`}
                            alt="gauge"
                            className={`submenu-img site-operation-icon ${
                                this.props.active === "operations"
                                    ? "active"
                                    : ""
                            }`}
                        />
                        Site Operation
                    </Link>
                    {siteType !== "staging" ? (
                        <Link
                            to={`/sites/addons/${identity}`}
                            className={
                                this.props.active === "addons" ? "active" : ""
                            }
                        >
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-addons-submenu.svg`}
                                alt="gauge"
                                className={`submenu-img site-addons-submenu ${
                                    this.props.active === "addons"
                                        ? "active"
                                        : ""
                                }`}
                                // className="submenu-img site-addons-submenu"
                            />
                            Addons
                        </Link>
                    ) : (
                        ""
                    )}
                    {siteType === "staging" ? (
                        <Link
                            className={
                                this.props.active === "logs" ? "active" : ""
                            }
                            to={`/site/staging/logs/${this.props.iden}`}
                        >
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/SiteSubMenu/site-addons-submenu.svg`}
                                alt="gauge"
                                className="submenu-img site-addons-submenu"
                            />
                            Logs
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default SiteSubMenuComponentResponsive;
