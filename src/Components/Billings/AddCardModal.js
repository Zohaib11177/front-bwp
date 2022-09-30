import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Modal } from "react-bootstrap";
import InputTextField from "Components/Forms/Fields/InputTextField";
import CardAddActionV6 from "Redux/V6/Billing/Card/Post/CardPostActionV6";
import CardValidation from "Validations/CardValidation";
import SwitchComponent from "Components/Sites/Domain/SwitchComponent";
import "Assets/css/Responsive/Billing.css";
import ErrorBusiness from "Businesses/ErrorBusiness";
class AddCardModal extends Component {
    state = {
        form: {
            holder_name: "",
            card_number: "",
            exp_year: "",
            exp_month: "",
            cvc: "",
            is_primary: false,
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
        const target = event.target;
        const { form } = this.state;
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
        CardValidation.validate(this.state.form, { abortEarly: false })
            .then(() => {
                this.props.dispatch(CardAddActionV6.cardPost(this.state.form));
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };

    render() {
        return (
            <Modal
                className="cardmodel add-card-modal"
                show={this.props.show}
                onHide={this.cardToggleModal}
            >
                <Modal.Header>
                    <Modal.Title>Add Payment Method</Modal.Title>
                </Modal.Header>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <div className="form-container" id="registration-form">
                            <Row>
                                <Col lg="12">
                                    <InputTextField
                                        name="name"
                                        getChange={this.handleChange}
                                        value={this.state.form.name}
                                        label="Card Holder Name"
                                        schema={CardValidation}
                                        error={this.state.error}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12">
                                    <InputTextField
                                        name="card_number"
                                        getChange={this.handleChange}
                                        value={this.state.form.card_number}
                                        label="Card Number"
                                        schema={CardValidation}
                                        error={this.state.error}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4">
                                    <InputTextField
                                        name="exp_month"
                                        getChange={this.handleChange}
                                        value={this.state.form.exp_month}
                                        label="Exp Month"
                                        schema={CardValidation}
                                        error={this.state.error}
                                    />
                                </Col>
                                <Col lg="4">
                                    <InputTextField
                                        name="exp_year"
                                        getChange={this.handleChange}
                                        value={this.state.form.exp_year}
                                        label="Exp Year"
                                        schema={CardValidation}
                                        error={this.state.error}
                                    />
                                </Col>
                                <Col lg="4">
                                    <InputTextField
                                        name="cvc"
                                        getChange={this.handleChange}
                                        value={this.state.form.cvc}
                                        label="CVC"
                                        schema={CardValidation}
                                        error={this.state.error}
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-2 billing-addcard-chunk">
                                <Col md={8} xs={8}>
                                    <h6 className="float-left sm">
                                        {" "}
                                        Make Primary
                                    </h6>
                                </Col>
                                <Col md={4} xs={4}>
                                    <SwitchComponent
                                        name="is_primary"
                                        id={`react-switch-${1}`}
                                        class="float-left"
                                        change={this.handleChange}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="billing-addcard-footer">
                        <Button
                            className="close-btn"
                            onClick={this.props.onHide}
                        >
                            Close
                        </Button>
                        <Button
                            type="submit"
                            className={`payment-btn bionic-btn ${
                                this.props.loading ? "loading" : ""
                            }`}
                        >
                            Add Payment Method
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.billingV6.cardV6.cardAdd.card,
        loading: state.billingV6.cardV6.cardAdd.loading,
    };
};

export default connect(mapStateToProps)(AddCardModal);
