import React, { Component } from "react";
import TemplateFull from "Templates/TemplateFull";
import { Link } from "react-router-dom";
import Configs from "Configs";
import { ReactSVG } from "react-svg";
import "Assets/css/Responsive/SubMenu.css";

class ProfileSubMenuComponentResponsive extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateFull>
                    <div class="scrollmenu">
                        <Link
                            className={
                                this.props.active === "profile" ? "active" : ""
                            }
                            to="../profile"
                        >
                            <span className="dashboard-icon">
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu.svg`}
                                    alt="gauge"
                                    className="submenu-img "
                                />
                            </span>
                            <span className="submenu-text"> Profile</span>
                        </Link>

                        <Link
                            to="../billing"
                            className={
                                this.props.active === "billing" ? "active" : ""
                            }
                        >
                            <span className="update-icon">
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-billing.svg`}
                                    alt="gauge"
                                    className="submenu-img"
                                />
                            </span>
                            <span className="submenu-text">Billing </span>
                        </Link>

                        <Link
                            to="../white-label"
                            className={
                                this.props.active === "white-label"
                                    ? "active"
                                    : ""
                            }
                        >
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-whitelabel.svg`}
                                alt="gauge"
                                className="site-domain-submenu-icon"
                            />
                            <span className="submenu-text"> White Label</span>
                        </Link>

                        <Link
                            to="../settings"
                            className={
                                this.props.active === "settings" ? "active" : ""
                            }
                        >
                            <span className="database-icon">
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-setting.svg`}
                                    alt="gauge"
                                    className="site-backup-submenu"
                                />
                            </span>
                            <span className="submenu-text"> Settings</span>
                        </Link>
                    </div>
                </TemplateFull>
            </React.Fragment>
        );
    }
}

export default ProfileSubMenuComponentResponsive;
