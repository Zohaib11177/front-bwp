import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
import "Assets/css/Responsive/SubMenu.css";
import ProfileSubMenuComponentResponsive from "Components/UI/ProfileSubMenuComponentResponsive";
class ProfileSubMenuComponent extends Component {
    render() {
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        const { active } = this.props;
        return (
            <React.Fragment>
                <Navbar className="sub-menu profile-menu" expand="lg">
                    <Navbar.Toggle
                        aria-controls="submenu-navbar"
                        className="submenu-toggle"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto" id="profile-sub-menu">
                            <Nav.Link
                                className={active === "profile" ? "active" : ""}
                                href="../profile"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu.svg`}
                                    alt="gauge"
                                    className="submenu-dashboard-img"
                                />
                                Profile
                            </Nav.Link>
                            <Nav.Link
                                className={active === "billing" ? "active" : ""}
                                href="../billing"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-billing.svg`}
                                    alt="gauge"
                                    className="submenu-img"
                                />
                                Billing
                            </Nav.Link>
                          {portal_settings?.name ? null :
                          <Nav.Link
                                className={
                                    active === "white-label" ? "active" : ""
                                }
                                href="../white-label"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-whitelabel.svg`}
                                    alt="gauge"
                                    className="submenu-img"
                                />
                                White Label
                            </Nav.Link>}  
                            <Nav.Link
                                className={
                                    active === "settings" ? "active" : ""
                                }
                                href="../settings"
                            >
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-setting.svg`}
                                    alt="gauge"
                                    className="submenu-img"
                                />
                                Settings
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* Responsive Profile Sub-Menu Component  */}

                <ProfileSubMenuComponentResponsive active={this.props.active} />
            </React.Fragment>
        );
    }
}

export default ProfileSubMenuComponent;
