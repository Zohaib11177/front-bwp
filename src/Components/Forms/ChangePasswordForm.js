import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import InputTextField from "Components/Forms/Fields/InputTextField";
import ChangePasswordAction from "Redux/V1/ChangePassword/ChangePasswordAction";

class ChangePasswordForm extends Component {
    state = {
        form: {
            change_password: "",
        },
    };
    // handleSubmit = (e) => {};
    handleSubmit = (e) => {
        e.preventDefault();
        // ProfileValidation.validate(this.state.form, { abortEarly: false })
        //     .then(() => {
                this.props.dispatch(
                    ChangePasswordAction.passwordPut({
                        form: this.state.form,
                    })
                );
            // })
            // .catch((err) => {
            //     this.setState({
            //         error: ErrorBusiness.errorGet(err),
            //     });
            // });
    };
    handleChange = (e) => {
        let { form } = this.state;
        form[e.target.name] = e.target.value;

        this.setState({
            form,
        });
    };
    render() {
        return (
            <Form
                // className="change-password-form"
                onSubmit={this.handleSubmit}
            >
                <div
                    className="form-container profile-form-main"
                    id="registration-form"
                >
                    <Row>
                        <Col lg="10">
                            <InputTextField
                                // id="firstname"
                                name="change_password"
                                label="Type New Password"
                                getChange={this.handleChange}
                                // schema={ProfileValidation}
                                // value={this.state.form.first_name}
                                // error={this.state.error}
                            />
                        </Col>
                        <Col lg="2" className="d-flex justify-content-end">
                            <Button
                                type="submit"
                                className="updatebtn bionic-btn btn-block btn-primary float-right mt-2"
                                // className={`updatebtn bionic-btn ${
                                //     profile.loading ? "loading" : ""
                                // }`}
                            >
                                Update{" "}
                            </Button>{" "}
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

export default ChangePasswordForm;
