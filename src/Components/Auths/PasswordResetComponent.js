import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Configs from "Configs";
import PasswordResetForm from "Components/Forms/PasswordResetForm";
class PasswordReset extends Component {
    render() {
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        return (
            <div className="container-fluid w-100 form-full">
                <Row>
                    <Col md={4} className="offset-4">
                        <Row className="justify-content-center align-items-center">
                            <div id="reset-password" className=" w-100 ">
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
                                        />}
                                    </div>
                                    <div>
                                        <PasswordResetForm
                                            token={
                                                this.props.match.params.token
                                            }
                                            dis={this.props.dispatch}
                                            passwordReset={
                                                this.props.password_reset
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        password_reset: state.passwordReset,
    };
};

export default connect(mapStateToProps)(PasswordReset);
