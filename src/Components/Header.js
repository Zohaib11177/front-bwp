import React, { Component } from "react";
import {
    Row,
    Container,
    Col,
    Navbar,
    Nav,
    Form,
    Button,
    NavDropdown,
} from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/fontawesome-free-solid";
import Configs from "Configs";
import "Assets/css/Responsive/Header.css";
import NotificationComponent from "Components/Notification/NotificationComponent";
import { ReactSVG } from "react-svg";
import LogoutAction from "Redux/V1/Auth/Logout/LogoutAction";
import StringHelper from "Helpers/StringHelper";
import MessageComponent from "Components/Message/MessageComponent";
class Header extends Component {
    logoutFunction = () => {
        this.props.dispatch(LogoutAction.logout());
    };
    render() {
        const { user } = this.props.Auth;
        const gravatarHash = StringHelper.stringToHash(user.email);
        const alert_message = this.props.alert.message;
        const alert_status = this.props.alert.status;
        const { portal_settings } = this.props.portalSettings
        return (
            <React.Fragment>
                {alert_message !== "" ? (
                    <div
                        className={
                            alert_status !== "medium"
                                ? alert_status === "low"
                                    ? "alert low"
                                    : "alert high"
                                : "alert medium"
                        }
                    >
                        <p>{alert_message}</p>
                    </div>
                ) : (
                    ""
                )}
                <Container fluid className="header" id="header">
                    <Row>
                        <Col sm={2} className="main-logo">
                            <a href="/dashboard" className="header-bg">
                                <img
                                    src={!portal_settings?.logo ? `${Configs.public_url}/assets/img/Brands/bionic-logo.gif` : portal_settings.logo}
                                    alt="logo"
                                />
                            </a>
                        </Col>
                        <Col sm={8} className="header-middle">
                            <Row>
                                <Col sm={3} className="inner-header d-none">
                                    <Form inline className="form-header">
                                        <div className="form-group has-search d-none">
                                            <span className="form-control-feedback">
                                                <FontAwesomeIcon
                                                    icon={faSearch}
                                                />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Site"
                                            />
                                        </div>
                                    </Form>
                                </Col>
                                <Col sm={11} className="inner-header">
                                    {portal_settings?.name ? null : <a href="/dashboard">
                                        <img
                                            className="responsive-bionic-logo d-lg-none d-xl-none"
                                            alt="responsive-bionic-logo"
                                            src={`${Configs.public_url}/assets/img/Brands/bionic-logo-white.gif`}
                                        />
                                    </a>}
                                    <Navbar className="float-right header-nav">
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                        <div className="responsive-toggle">
                                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        </div>
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <a
                                                href="/profile"
                                                className="username-link"
                                            >
                                                {!user.profile_image ? (
                                                    <div className="header-bg responsive-header navbar-profile-image-parent">
                                                        <img
                                                            src={`https://www.gravatar.com/avatar/${gravatarHash}`}
                                                            alt="Profile"
                                                            className=" float-left  navbar-profile-image"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="header-bg responsive-header navbar-profile-image-parent">
                                                        <img
                                                            src={
                                                                user.profile_image
                                                            }
                                                            alt="Profile"
                                                            className=" float-left  navbar-profile-image"
                                                        />
                                                    </div>
                                                )}
                                            </a>
                                            <div className="responsive-none avatar-title">
                                                <p>{user.first_name}</p>
                                            </div>

                                            <div className="main-nav-responsive">
                                                <Nav className="mr-auto">
                                                    <Nav.Link
                                                        className={
                                                            window.location
                                                                .pathname ===
                                                                "/dashboard" ||
                                                                window.location
                                                                    .pathname ===
                                                                "/"
                                                                ? "active"
                                                                : ""
                                                        }
                                                        href="/dashboard"
                                                    >
                                                        <ReactSVG
                                                            src={`${Configs.public_url}/assets/img/HeaderIcons/header-dashboard.svg`}
                                                            alt="gauge"
                                                            className="navbar-dashboard-icon"
                                                        />
                                                        Dashboard
                                                    </Nav.Link>
                                                    <Nav.Link
                                                        className={`${window.location
                                                            .pathname ===
                                                            "/sites"
                                                            ? "active"
                                                            : ""
                                                            }`}
                                                        href="/sites"
                                                    >
                                                        <ReactSVG
                                                            src={`${Configs.public_url}/assets/img/HeaderIcons/header-sites.svg`}
                                                            alt="gauge"
                                                            className="navbar-sites-icon"
                                                        />
                                                        Sites
                                                    </Nav.Link>
                                                    <Nav.Link
                                                        className={`responsive-none nav-link ${window.location
                                                            .pathname ===
                                                            "/sites/launch"
                                                            ? "active"
                                                            : ""
                                                            }`}
                                                        href="/sites/launch"
                                                        variant="primary"
                                                    >
                                                        <ReactSVG
                                                            src={`${Configs.public_url}/assets/img/HeaderIcons/header-new-site.svg`}
                                                            alt="gauge"
                                                            className="navbar-new-site-icon"
                                                        />
                                                        New Site
                                                    </Nav.Link>

                                                    <ReactSVG
                                                        src={`${Configs.public_url}/assets/img/HeaderIcons/header-user.svg`}
                                                        alt="gauge"
                                                        className="navbar-user-icon"
                                                    />

                                                    <NavDropdown
                                                        title="Account"
                                                        id="basic-nav-dropdown"
                                                        className="responsive-none profile-dropdown-image "
                                                    >
                                                        <span className="dropdown-menu-arrow  dropdown-main"></span>
                                                        <Row>
                                                            <Col xl="12 text-center">
                                                                <div className="header-username">
                                                                    <span
                                                                        role="img"
                                                                        aria-label="wave"
                                                                    >
                                                                        {" "}
                                                                        👋{" "}
                                                                    </span>
                                                                    <span className="hi-text">
                                                                        Hey,
                                                                    </span>{" "}
                                                                    {
                                                                        user.first_name
                                                                    }
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <NavDropdown.Item href="/profile">
                                                            <ReactSVG
                                                                src={`${Configs.public_url}/assets/img/HeaderIcons/header-user.svg`}
                                                                alt="gauge"
                                                                className="navbar-dropdown-icon"
                                                            />
                                                            Profile
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Item href="/billing">
                                                            <ReactSVG
                                                                src={`${Configs.public_url}/assets/img/HeaderIcons/header-billing.svg`}
                                                                alt="gauge"
                                                                className="navbar-dropdown-icon"
                                                            />
                                                            Billing
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Item href="/affiliate">
                                                            <ReactSVG
                                                                src={`${Configs.public_url}/assets/img/HeaderIcons/affiliate.svg`}
                                                                alt="gauge"
                                                                className="navbar-dropdown-icon"
                                                            />
                                                            Affiliate
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Item href="/settings">
                                                            <ReactSVG
                                                                src={`${Configs.public_url}/assets/img/HeaderIcons/settings.svg`}
                                                                alt="gauge"
                                                                className="navbar-dropdown-icon"
                                                            />
                                                            Settings
                                                        </NavDropdown.Item>{" "}
                                                        <NavDropdown.Item href="/white-label">
                                                            <ReactSVG
                                                                src={`${Configs.public_url}/assets/img/HeaderIcons/white-label.svg`}
                                                                alt="gauge"
                                                                className="navbar-dropdown-icon"
                                                            />
                                                            White Label
                                                        </NavDropdown.Item>{" "}
                                                        <NavDropdown.Item
                                                            //    Logout API Integration
                                                            onClick={
                                                                this
                                                                    .logoutFunction
                                                            }
                                                        >
                                                            <ReactSVG
                                                                src={`${Configs.public_url}/assets/img/HeaderIcons/logout.svg`}
                                                                alt="gauge"
                                                                className="navbar-dropdown-icon"
                                                            />
                                                            Logout
                                                        </NavDropdown.Item>
                                                    </NavDropdown>
                                                    {/* =============== */}
                                                    <Button
                                                        className="bionic-btn-white"
                                                        href="/sites/launch"
                                                    >
                                                        <span className="plus-icon">
                                                            <FontAwesomeIcon
                                                                icon={faPlus}
                                                            />
                                                        </span>{" "}
                                                        New Site
                                                    </Button>
                                                </Nav>
                                            </div>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Col>
                                <Col
                                    sm={1}
                                    className="bell-area d-flex align-items-center"
                                >
                                    <NotificationComponent />
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            sm={2}
                            className="header-right header-dropdown d-flex"
                        >
                            <div className="header-profile-image-parent">
                                <a href="/profile" className="username-link">
                                    {!user.profile_image ? (
                                        <div className="header-img-placeholder">
                                            <img
                                                src={`https://www.gravatar.com/avatar/${gravatarHash}?d=`}
                                                alt="Profile"
                                                className="rounded-circle float-left header-profile-image-child"
                                            />
                                        </div>
                                    ) : (
                                        <div className="header-profile-image">
                                            <img
                                                src={user.profile_image}
                                                alt="Default profile"
                                                className="rounded-circle float-left header-profile-image-child"
                                            />
                                        </div>
                                    )}
                                </a>
                            </div>

                            <NavDropdown
                                // title={TextLimitHelper.limit(
                                //     user.first_name,
                                //     12
                                // )}
                                title="Account"
                                id="basic-nav-dropdown"
                            // className={` carrot-icon ${
                            //     user.first_name.length > 12
                            //         ? "show-header-menu"
                            //         : ""
                            // }`}
                            >
                                <span className="dropdown-menu-arrow dropdown-menu-arrow-web-view"></span>
                                <Row>
                                    <Col lg={12} className="text-center mb-1">
                                        <div className="header-username">
                                            <span role="img" aria-label="wave">
                                                {" "}
                                                👋{" "}
                                            </span>
                                            <span className="hi-text">
                                                Hey,
                                            </span>{" "}
                                            {user.first_name}
                                        </div>
                                    </Col>
                                </Row>
                                <NavDropdown.Item
                                    href="/profile"
                                    className="dropdown-item-hover dropdown-content hr-line"
                                >
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/HeaderIcons/profile-user.svg`}
                                        alt="profile"
                                        className="user-profile-header-dropdown "
                                    />
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/billing"
                                    className="dropdown-item-hover dropdown-content"
                                >
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/HeaderIcons/billing.svg`}
                                        alt="billing"
                                        className="billing-header-dropdown"
                                    />
                                    Billing
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/affiliate"
                                    className="dropdown-item-hover dropdown-content"
                                >
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/HeaderIcons/affiliate.svg`}
                                        alt="affiliate"
                                        className="affiliate-header-dropdown"
                                    />
                                    Affiliate
                                </NavDropdown.Item>
                                {
                                    !portal_settings?.name ?
                                        <NavDropdown.Item
                                            href="/white-label"
                                            className="dropdown-item-hover dropdown-content"
                                        >
                                            <ReactSVG
                                                src={`${Configs.public_url}/assets/img/HeaderIcons/white-label.svg`}
                                                alt="affiliate"
                                                className="white-label-header-dropdown"
                                            />
                                            White Label
                                        </NavDropdown.Item>
                                        :
                                        ""
                                }
                                {" "}
                                <NavDropdown.Item
                                    href="/settings"
                                    className="dropdown-item-hover dropdown-content"
                                >
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/HeaderIcons/settings.svg`}
                                        alt="affiliate"
                                        className="settings-header-dropdown"
                                    />
                                    Settings
                                </NavDropdown.Item>{" "}
                                <NavDropdown.Item
                                    //    Logout API Integration
                                    onClick={this.logoutFunction}
                                    className="dropdown-item-hover"
                                >
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/HeaderIcons/logout.svg`}
                                        alt="affiliate"
                                        className="logout-header-dropdown"
                                    />
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                    </Row>
                </Container>
                <MessageComponent />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        Auth: state.login,
        alert: state.systemAlerts.list,
        portalSettings: state.portalSettingsV6.list
    };
}

export default connect(mapStateToProps)(Header);
