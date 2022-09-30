import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import InputEmailField from "Components/Forms/Fields/InputEmailField";
import LoginValidation from "Validations/LoginValidation";
import ForgotPasswordAction from "Redux/V1/Auth/PasswordForgot/Post/PasswordPostAction";
class ForgotPasswordForm extends Component {
    state = {
        data: {
            email: null,
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
        this.props.dis(ForgotPasswordAction.passwordPost(this.state.data));
    };

    render() {
        return (
            <div>
                {/* **********form main container*********  */}
                <div className="form-container">
                    <div className="title-container">
                        <div className="form-title">
                            <p>Forgot Password</p>
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
                                <InputEmailField
                                    name="email"
                                    getChange={this.handleChange}
                                    schema={LoginValidation}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <button
                                    className={`btn btn-lg btn-block bionic-btn mt-2 ${
                                        this.props.forgotPassword.loading
                                            ? "loading"
                                            : ""
                                    }`}
                                    type="submit"
                                >
                                    Send
                                </button>
                            </Col>
                        </Row>
                        <Row className="footer-text">
                            <Col md={12}>
                                <div>
                                    <p>
                                        Wanna try again? &nbsp;
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

export default ForgotPasswordForm;
