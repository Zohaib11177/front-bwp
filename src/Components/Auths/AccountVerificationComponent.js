import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import TemplateMain from "Templates/TemplateMain";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
import AccountVerificationActionV2 from "Redux/V2/Auth/Verification/AccountVerificationResend/AccountVerificationActionV2";

class AccountVerificationComponent extends Component {
    componentDidMount() {
        const { token } = this.props.match.params;
        this.props.dispatch(
            AccountVerificationActionV2.accountVerification(token)
        );
    }
    render() {
        const { success } = this.props.accountVerification;
        return (
            <TemplateMain hide={true} bg="#fff">
                {" "}
                <div style={{ height: "200px" }}></div>
                <div className="box mt-5 mb-4">
                    <div className="staging-renewal">
                        <Row>
                            {" "}
                            <Col md={3}></Col>
                            <Col md={6}>
                                {success ? (
                                    <React.Fragment>
                                        <ReactSVG
                                            title="Login"
                                            src={`${Configs.public_url}/assets/img/General/account-verification.svg`}
                                            alt="wordpresswhite"
                                            className="update-all-business-wp-icon mb-2"
                                        />
                                        <h5>Account Verified</h5>
                                        <p>
                                            Thank you, Your account is in
                                            review, please contact support
                                        </p>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <img
                                            id="loading-image"
                                            src={`${Configs.public_url}/assets/img/Brands/bolt.gif`}
                                            alt="Bionic Thunder"
                                        />{" "}
                                        <br />
                                        Processing...
                                    </React.Fragment>
                                )}
                            </Col>
                        </Row>{" "}
                    </div>
                </div>
                <div style={{ height: "200px" }}></div>
            </TemplateMain>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        accountVerification: state.authV2.accountVerificationV2,
    };
};

export default connect(mapStateToProps)(AccountVerificationComponent);
