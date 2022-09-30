import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sitedetail.css";
import "Assets/css/profile.css";
import "Assets/css/form.css";
import { connect } from "react-redux";
// import Configs from "Configs";
// import TextLimitHelper from "Helpers/TextLimitHelper";
import ProfileForm from "Components/Forms/ProfileForm";
import TemplateFull from "Templates/TemplateFull";
import ProfileSubMenuComponent from "Components/UI/ProfileSubMenuComponent";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
import ChangePasswordForm from "Components/Forms/ChangePasswordForm";
import { faInfo } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfileComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <ProfileSubMenuComponent active="profile" />
                    <div className="site-profile-page">
                        <TemplateFull>
                            <div>
                                <div className="page-header">
                                    Update your profile
                                    <div className="heading-icon">
                                        <ReactSVG
                                            src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu.svg`}
                                            alt="gauge"
                                            className="submenu-dashboard-img"
                                        />
                                    </div>
                                </div>
                                <div className="box">
                                    {/* Profile Form Chunk  */}
                                    <ProfileForm
                                        user={this.props.user}
                                        profile={this.props.profile}
                                        dispatch={this.props.dispatch}
                                    />
                                </div>
                                <div className="box mt-3">
                                    <div className="page-header">
                                        Change Password
                                    </div>
                                    <ChangePasswordForm 
                                    dispatch={this.props.dispatch}/>
                                <div class="date">
                                
                                <p><FontAwesomeIcon icon={faInfo} /> This action will logout you from all devices.</p>
                                </div>
                                </div>

                                <div className="page-header d-none">
                                    Security
                                </div>
                                <div className="box d-none">
                                    <Row className="security-box-inner">
                                        <Col
                                            lg="7"
                                            className="notifications-title"
                                        >
                                            Two Factor Authentication
                                        </Col>
                                        <Col lg="5" className="text-right pr-0">
                                            <input
                                                className="react-switch-checkbox"
                                                id={`react-switch-security`}
                                                type="checkbox"
                                            />
                                            <label
                                                className="react-switch-label"
                                                htmlFor={`react-switch-security`}
                                            >
                                                <span
                                                    className={`react-switch-button`}
                                                />
                                            </label>
                                            <button className="btn sshbtn btn-primary">
                                                Settings
                                            </button>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="page-header d-none">
                                    SSH Keys
                                </div>
                                <div className="box d-none">
                                    <Row className="ssh-box">
                                        <Col
                                            lg="6"
                                            className="notifications-title"
                                        >
                                            View SSH Keys
                                        </Col>
                                        <Col lg="6" className="text-right pr-0">
                                            <button className="btn sshbtn btn-primary">
                                                View SSH Keys
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div>
                                <div className="page-header d-none">
                                    Notifications
                                </div>
                                <div className="box d-none">
                                    <Row className="notifications-box">
                                        <Col
                                            lg="9"
                                            className="notifications-title"
                                        >
                                            Overage Notifications
                                        </Col>
                                        <Col lg="3" className="text-right">
                                            <input
                                                className="react-switch-checkbox"
                                                id={`react-switch-new`}
                                                type="checkbox"
                                            />
                                            <label
                                                className="react-switch-label"
                                                htmlFor={`react-switch-new`}
                                            >
                                                <span
                                                    className={`react-switch-button`}
                                                />
                                            </label>
                                        </Col>
                                    </Row>
                                    <Row className="notifications-box">
                                        <Col
                                            lg="9"
                                            className="notifications-title"
                                        >
                                            Update Notifications
                                        </Col>
                                        <Col lg="3" className="text-right">
                                            <input
                                                className="react-switch-checkbox"
                                                id={`react-switch-new1`}
                                                type="checkbox"
                                            />
                                            <label
                                                className="react-switch-label"
                                                htmlFor={`react-switch-new1`}
                                            >
                                                <span
                                                    className={`react-switch-button`}
                                                />
                                            </label>
                                        </Col>
                                    </Row>
                                    <Row className="notifications-box">
                                        <Col
                                            lg="9"
                                            className="notifications-title"
                                        >
                                            Site Alerts
                                        </Col>
                                        <Col lg="3" className="text-right">
                                            <input
                                                className="react-switch-checkbox"
                                                id={`react-switch-new2`}
                                                type="checkbox"
                                            />
                                            <label
                                                className="react-switch-label"
                                                htmlFor={`react-switch-new2`}
                                            >
                                                <span
                                                    className={`react-switch-button`}
                                                />
                                            </label>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </TemplateFull>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profileV2.profileUpdate,
    };
};

export default connect(mapStateToProps)(ProfileComponent);
