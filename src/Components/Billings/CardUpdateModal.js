import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Modal } from "react-bootstrap";
import InputTextField from "Components/Forms/Fields/InputTextField";
import CardValidation from "Validations/CardUpdateValidation";
import SwitchComponent from "Components/Sites/Domain/SwitchComponent";
import "Assets/css/Responsive/Billing.css";
import CardPutInfoActionV6 from "Redux/V6/Billing/Card/Put Info/CardPutInfoActionV6";

class CardUpdateModal extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        // CardValidation.validate(this.props.card_state , { abortEarly: false })
        //     .then(() => {
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         // this.setState({
        //             //     // // // error: ErrorBusiness.errorGet(err),
        //             // });
        //         });
        this.props.dispatch(CardPutInfoActionV6.cardPutInfo(this.props.card_state));

    };

    render() {

        const { card_state } = this.props

        return (
            <>
            
            <Modal
                className="cardmodel add-card-modal"
                show={this.props.show}
                onHide={this.cardToggleModal}
            >
                <Modal.Header>
                    <Modal.Title>Update Payment Method</Modal.Title>
                </Modal.Header>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <div className="form-container" id="registration-form">
                            <Row>
                                <Col lg="12">
                                    <InputTextField
                                        name="holder_name"
                                        getChange={this.props.handleChange}
                                        value={card_state.holder_name}
                                        label="Card Holder Name"
                                        schema={CardValidation}
                                        error={card_state.error}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12">
                                    <InputTextField
                                        name="card_number"
                                        getChange={this.props.handleChange}
                                        value={card_state.card_number}
                                        label="Card Number"
                                        schema={CardValidation}
                                        error={card_state.error}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4">
                                    <InputTextField
                                        name="exp_month"
                                        getChange={this.props.handleChange}
                                        value={card_state.exp_month}
                                        label="Exp Month"
                                        schema={CardValidation}
                                        error={card_state.error}
                                    />
                                </Col>
                                <Col lg="4">
                                    <InputTextField
                                        name="exp_year"
                                        getChange={this.props.handleChange}
                                        value={card_state.exp_year}
                                        label="Exp Year"
                                        schema={CardValidation}
                                        error={card_state.error}
                                    />
                                </Col>
                                <Col lg="4">
                                    <InputTextField
                                        name="cvc"
                                        getChange={this.props.handleChange}
                                        value={card_state.cvc}
                                        label="CVC"
                                        schema={CardValidation}
                                        error={card_state.error}
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
                                        change={this.props.handleChange}
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
                            className={`payment-btn bionic-btn ${this.props.loading ? "loading" : ""
                                }`}
                        >
                            Add Payment Method
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.billingV6.cardV6.cardAdd.card,
        loading: state.billingV6.cardV6.cardUpdate.loading,
    };
};

export default connect(mapStateToProps)(CardUpdateModal);
