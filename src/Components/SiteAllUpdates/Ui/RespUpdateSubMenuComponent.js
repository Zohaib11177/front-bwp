import React, { Component } from "react";
import { Link } from "react-router-dom";
import Configs from "Configs";
import { ReactSVG } from "react-svg";
import "Assets/css/Responsive/SubMenu.css";

class UpdateSubMenuComponentResponsive extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="scrollmenu">
                    <Link
                        className={
                            this.props.active === "updateall" ? "active" : ""
                        }
                        to="../updates"
                    >
                        <span className="dashboard-icon">
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/SubMenu/UpdateAllSubMenu/site-update-all.svg`}
                                alt="gauge"
                                className="submenu-img "
                            />
                        </span>
                        <span className="submenu-text"> Update All</span>
                    </Link>

                    <Link
                        to="../updates/core"
                        className={this.props.active === "core" ? "active" : ""}
                    >
                        <span className="update-icon">
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                alt="gauge"
                                className="submenu-img"
                            />
                        </span>
                        <span className="submenu-text">Core </span>
                    </Link>

                    <Link
                        to="../updates/theme"
                        className={
                            this.props.active === "theme" ? "active" : ""
                        }
                    >
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/WordPress/wp-theme.svg`}
                            alt="gauge"
                            className="site-domain-submenu-icon"
                        />
                        <span className="submenu-text"> Themes</span>
                    </Link>
                    <Link
                        to="../updates/plugin"
                        className={
                            this.props.active === "plugin" ? "active" : ""
                        }
                    >
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/WordPress/wp-plugin.svg`}
                            alt="gauge"
                            className="submenu-img  updateall-plugin-icon"
                        />
                        <span className="submenu-text"> Plugins</span>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default UpdateSubMenuComponentResponsive;
