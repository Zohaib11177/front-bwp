import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import RegistrationForm from "Components/Forms/RegistrationForm";
import RegisterActionV6 from "Redux/V6/Auth/Register/RegisterActionV6";
import { connect } from "react-redux";
import "Assets/css/checkbox.css";
import "Assets/css/form.css";
import { ToastContainer } from "react-toastify";
import ToastHelper from "Helpers/ToastHelper";
import Configs from "Configs";

class RegistrationComponent extends Component {
    register = (data) => {
        this.props.dispatch(RegisterActionV6.register(data));
    };
    componentDidUpdate() {
        ToastHelper.error(this.props.register.err_mess);
    }

    render() {
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        return (
            <div className="container-fluid">
                <Row>
                    <Col md={12}>
                        <Row>
                            <div className="col-md-9 mx-auto register-resp-main">
                                <div className="logo-wrapper ">
                                    <div className="logo">
                                    {!portal_settings?.name ? <img
                                            alt="logo"
                                            className="site-logo img-fluid"
                                            src={`${Configs.public_url}/assets/img/Brands/bionic-logo.gif`}
                                        /> : <img
                                        alt="logo"
                                        className="site-logo img-fluid"
                                        src={portal_settings?.logo ? portal_settings?.logo : null}
                                    />}
                                       
                                    </div>
                                </div>

                                <div>
                                    {this.props.register.success ? (
                                        <div class="register-success-msg">
                                            Please verify your account by
                                            clicking on the link sent to your
                                            email address.
                                        </div>
                                    ) : (
                                        <RegistrationForm
                                            register={this.register}
                                            registration={this.props.register}
                                            promoCode={this.props.promoCode}
                                        />
                                    )}
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <ToastContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        register: state.authV6.registerV6,
    };
};

export default connect(mapStateToProps)(RegistrationComponent);
