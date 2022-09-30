import React, { Component } from "react";
import LoginForm from "Components/Forms/LoginForm";
import { Row, Col } from "react-bootstrap";
import LoginActionV6 from "Redux/V6/Auth/Login/LoginActionV6";
import { connect } from "react-redux";
import Configs from "Configs";
import SiteGetActionV6 from "Redux/V6/Sites/SitePortalSettings/Get/SiteGetActionV6"

/**
 * ### Welcome to Bionic WordPress Login Page ###
 *
 * ##### Component Names: #####
 *
 * 1.  Login Component
 * @typedef {Class} LoginComponent
 * @property {String } Email Input Field for Email Address
 * @property {String} Password Input Field for Password
 */

class LoginComponent extends Component {
    state = {
        isFetched: false
    }

    login = (data) => {
        this.props.dispatch(LoginActionV6.login(data));
    };

    componentDidMount() {
        const { isFetched } = this.props.portalSettings
        if (!isFetched) this.props.dispatch(SiteGetActionV6.sitePSGet())
    }

    render() {

        const { loading } = this.props.login;
        const { portal_settings } = this.props.portalSettings

        return (
            <div className="container-fluid w-100">
                <Row>
                    <Col md={12}>
                        <Row className="justify-content-center align-items-center">
                            <div className="col-xl-8">
                                <div className="logo-wrapper ">
                                    <div className="logo">
                                        <img
                                            alt="logo"
                                            className="site-logo img-fluid"
                                            src={!portal_settings?.logo ? `${Configs.public_url}/assets/img/Brands/bionic-logo.gif` : portal_settings.logo}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <LoginForm
                                        login={this.login}
                                        loading={loading}
                                    />
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.authV6.loginV6,
        portalSettings: state.portalSettingsV6.list
    };
}
export default connect(mapStateToProps)(LoginComponent);
