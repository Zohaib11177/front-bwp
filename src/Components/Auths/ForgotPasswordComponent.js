import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import ForgotPasswordForm from "Components/Forms/ForgotPasswordForm";
import Configs from "Configs";
import "Assets/css/Responsive/ForgotPassword.css";
class ForgotPassword extends Component {
    render() {
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        return (
            <div className="container-fluid w-100 form-full">
                <Row className="justify-content-center align-items-center">
                    <Col md={4} className="forgot-column-responsive">
                        <div id="forgot-password" className=" w-100 ">
                            <div className="logo-wrapper ">
                                <div className="logo">
                                    {portal_settings?.name ?
                                    <img
                                    alt="logo"
                                    className="site-logo img-fluid"
                                    src={portal_settings?.logo}
                                /> :
                                <img
                                        alt="logo"
                                        className="site-logo img-fluid"
                                        src={`${Configs.public_url}/assets/img/Brands/bionic-logo.gif`}
                                    />
                                    }
                                    {/* <img
                                        alt="logo"
                                        className="site-logo img-fluid"
                                        src={`${Configs.public_url}/assets/img/Brands/bionic-logo.gif`}
                                    /> */}
                                </div>
                                <div>
                                    <ForgotPasswordForm
                                        dis={this.props.dispatch}
                                        forgotPassword={
                                            this.props.forgot_password
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        forgot_password: state.forgotPassword,
    };
};

export default connect(mapStateToProps)(ForgotPassword);
