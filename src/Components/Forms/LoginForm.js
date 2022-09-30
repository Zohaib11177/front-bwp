import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import InputEmailField from "Components/Forms/Fields/InputEmailField";
import InputPasswordField from "Components/Forms/Fields/InputPasswordField";
import LoginValidation from "Validations/LoginValidation";
import LocalStorageHelper from "Helpers/LocalStorageHelper";
import ErrorBusiness from "Businesses/ErrorBusiness";
class LoginForm extends Component {
    state = {
        form: {
            email: "",
            password: "",
            token: LocalStorageHelper.get("fb_token"),
        },
    };

    handleChange = (event) => {
        const errorUpdate = ErrorBusiness.errorRemove(
            this.state.error,
            event.target.name
        );
        this.setState({
            error: errorUpdate,
        });
        const { form } = this.state;
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    };

    handleSubmit = async () => {
        LoginValidation.validate(this.state.form, {
            abortEarly: false,
        })
            .then(() => {
                this.props.login(this.state.form);
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };

    render() {
        return (
            <div>
                {/* **********form main container*********  */}
                <div className="form-container">
                    <div className="title-container">
                        <div className="form-title">
                            <p>Login to your Account </p>
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
                        {/* **********1st Row*********  */}
                        <Row>
                            <Col md={12}>
                                <InputEmailField
                                    name="email"
                                    label="Email"
                                    getChange={this.handleChange}
                                    schema={LoginValidation}
                                    value={this.state.form.email}
                                    error={this.state.error}
                                />{" "}
                            </Col>
                        </Row>

                        {/* **********2nd Row*********  */}

                        <Row>
                            <Col md={12}>
                                <InputPasswordField
                                    name="password"
                                    label="Password"
                                    getChange={this.handleChange}
                                    schema={LoginValidation}
                                    value={this.state.form.password}
                                    error={this.state.error}
                                />
                            </Col>
                        </Row>
                        {/* <hr className="hr-align" /> */}
                        {/* **********3rd Row*********  */}
                        <div className="persona-section">
                            <Row>
                                <Col md={12}>
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                        value={true}
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="checkbox-remember"
                                    ></label>
                                    <div className="persona">
                                        <p> Remember my password</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Row>
                            <Col md={12}>
                                <button
                                    className={`btn btn-primary btn-lg btn-block bionic-btn ${
                                        this.props.loading ? "loading" : ""
                                    }`}
                                    id="bwp-submit-button"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </Col>
                        </Row>
                        <div className="row footer-text">
                            <Col md={12}>
                                <div>
                                    <p className="mb-1">
                                        Don't have an account? &nbsp;
                                        <Link
                                            className="bionic-bold bionic-link"
                                            to="/register"
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div>
                                    <p>
                                        <Link
                                            className="bionic-bold bionic-link"
                                            to="/forgotpassword"
                                        >
                                            Forgot Password ?
                                        </Link>
                                    </p>
                                </div>
                            </Col>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
