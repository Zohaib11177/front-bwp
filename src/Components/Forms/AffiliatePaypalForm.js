import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import InputTextField from "Components/Forms/Fields/InputTextField";
import AffiliatePaypalValidation from "Validations/AffiliatePaypalValidation";
import AffProfileUpdateAction from "Redux/V1/Affiliate/AffiliateProfile/Put/AffProfilePutAction";
import ErrorBusiness from "Businesses/ErrorBusiness";
import "Assets/css/form.css";

class AffiliatePaypalForm extends Component {
    state = {
        form: {
            paypal_account: "",
        },
        state_run: true,
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
    handleSubmit = (event) => {
        event.preventDefault();
        AffiliatePaypalValidation.validate(this.state.form, {
            abortEarly: false,
        })
            .then(() => {
                this.props.dis(
                    AffProfileUpdateAction.affProfilePut(this.state.form)
                );
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };
    setDefaultData = () => {
        const { state_run, form } = this.state;
        setTimeout(() => {
            if (state_run) {
                form.paypal_account = this.props.account.wallet.paypal_account;
                this.setState({
                    form,
                    state_run: false,
                });
            }
        }, 1500);
    };
    render() {
        this.setDefaultData();
        const { profileUpdate } = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col md={6} className="col-12">
                        <div
                            className="form-container mt-0"
                            id="registration-form"
                        >
                            <InputTextField
                                label={"Affiliate PayPal Account"}
                                className="mt-0"
                                name={"paypal_account"}
                                type={"email"}
                                value={this.state.form.paypal_account}
                                getChange={this.handleChange}
                                schema={AffiliatePaypalValidation}
                                error={this.state.error}
                            />
                        </div>
                    </Col>
                    <Col md={6} className="col-12">
                        <Button
                            type="submit"
                            className={`btn bionic-btn w-100 mt-2 ${
                                profileUpdate.loading ? "loading" : ""
                            }`}
                            style={{
                                backgroundColor: "rgb(22, 101, 216)",
                            }}
                        >
                            Add PayPal Account
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-2"></Row>
            </Form>
        );
    }
}

export default AffiliatePaypalForm;
