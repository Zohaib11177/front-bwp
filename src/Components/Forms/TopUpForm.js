import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import CardListComponent from "Components/Billings/CardListComponent";
import InputTextField from "Components/Forms/Fields/InputTextField";
import TopupAction from "Redux/V1/Topup/TopupPutAction";
import "Assets/css/form.css";
import TopUpValidation from "Validations/TopUpValidation";
import "Assets/css/Responsive/Billing.css";
import ErrorBusiness from "Businesses/ErrorBusiness";
class TopupForm extends Component {
    state = {
        form: {
            card_id: null,
            amount: "",
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
    handleSubmit = (event) => {
        event.preventDefault();
        TopUpValidation.validate(this.state.form, {
            abortEarly: false,
        })
            .then(() => {
                this.props.dis(TopupAction.topupPut(this.state.form));
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };
    getCardId = (id) => {
        this.setState({
            form: {
                card_id: id,
            },
        });
    };
    render() {
        return (
            <Form className="Top-up-form-width billing-topup-chunk">
                <Row>
                    <Col md={12}>
                        <CardListComponent
                            onChange={this.handleChange}
                            card={this.getCardId}
                            cardId={this.state.form.card_id}
                            schema={TopUpValidation}
                            fieldName={"card_id"}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="form-container" id="registration-form">
                            <InputTextField
                                label={"Amount"}
                                name={"amount"}
                                type={"text"}
                                getChange={this.handleChange}
                                value={this.state.form.amount}
                                schema={TopUpValidation}
                                error={this.state.error}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6} xs={6}>
                        <Button
                            className="close-btn"
                            onClick={this.props.toggle}
                        >
                            Close
                        </Button>
                    </Col>
                    <Col md={6} xs={6} className="text-right col-6">
                        <Button
                            onClick={this.handleSubmit}
                            className={`btn btn-primary button-add-topup bionic-btn ${
                                this.props.topUp.loading ? "loading" : ""
                            }`}
                            style={{
                                backgroundColor: "rgb(22, 101, 216)",
                            }}
                        >
                            Add Topup
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default TopupForm;
