import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
import { Link } from "react-router-dom";
import UpdateSubMenuComponentResponsive from "Components/SiteAllUpdates/Ui/RespUpdateSubMenuComponent";

class UpdateSubMenuComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className="sub-menu updateall-menu" expand="lg">
                    <Navbar.Toggle
                        aria-controls="submenu-navbar"
                        className="submenu-toggle"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link
                                className={
                                    this.props.active === "updateall"
                                        ? "active"
                                        : ""
                                }
                                to="../updates"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/UpdateAllSubMenu/site-update-all.svg`}
                                    alt="gauge"
                                    className="submenu-dashboard-img updateall-icon"
                                />
                                Update All
                            </Link>
                            <Link
                                className={
                                    this.props.active === "core" ? "active" : ""
                                }
                                to="../updates/core"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                    alt="gauge"
                                    className="submenu-img updateall-core-icon"
                                />
                                Core
                            </Link>
                            <Link
                                className={
                                    this.props.active === "theme"
                                        ? "active"
                                        : ""
                                }
                                to="../updates/theme"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/WordPress/wp-theme.svg`}
                                    alt="gauge"
                                    className="submenu-img updateall-theme-icon"
                                />
                                Themes
                            </Link>
                            <Link
                                className={
                                    this.props.active === "plugin"
                                        ? "active"
                                        : ""
                                }
                                to="../updates/plugin"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/WordPress/wp-plugin.svg`}
                                    alt="gauge"
                                    className="submenu-img  updateall-plugin-icon"
                                />
                                Plugins
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/*  ************  Responsvie Update Sub Menu Component  ********** */}

                <UpdateSubMenuComponentResponsive active={this.props.active} />
            </React.Fragment>
        );
    }
}

export default UpdateSubMenuComponent;
