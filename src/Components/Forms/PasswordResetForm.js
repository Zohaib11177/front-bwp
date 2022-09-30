import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import InputPasswordField from "Components/Forms/Fields/InputPasswordField";
import PasswordResetAction from "Redux/V1/Auth/PasswordReset/Put/PasswordPutAction";
class PasswordResetForm extends Component {
    state = {
        data: {
            token: this.props.token,
            password: null,
            password_confirmation: null,
        },
    };

    handleChange = (e) => {
        let { data } = this.state;
        data[e.target.name] = e.target.value;
        this.setState({
            data,
        });
    };

    handleSubmit = async () => {
        this.props.dis(PasswordResetAction.passwordPut(this.state.data));
    };

    render() {
        return (
            <div>
                {/* **********form main container*********  */}
                <div className="form-container">
                    <div className="title-container">
                        <div className="form-title">
                            <p>Reset Your Password</p>
                        </div>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.handleSubmit();
                        }}
                        id="registration-form"
                        className="form-margin-top"
                    >
                        <Row>
                            <Col md={12}>
                                <InputPasswordField
                                    name="password"
                                    getChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <InputPasswordField
                                    name="password_confirmation"
                                    label="Confirm Password"
                                    getChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <button
                                    className={`btn  btn-lg btn-block bionic-btn mt-2 ${
                                        this.props.passwordReset.loading
                                            ? "loading"
                                            : ""
                                    }`}
                                    type="submit"
                                >
                                    Reset Password
                                </button>
                            </Col>
                        </Row>
                        <Row className="footer-text">
                            <Col md={12}>
                                <div>
                                    <p>
                                        Skip reset password and &nbsp;
                                        <Link
                                            className="bionic-bold bionic-link"
                                            to="/login"
                                        >
                                            Sign In
                                        </Link>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        );
    }
}

export default PasswordResetForm;
