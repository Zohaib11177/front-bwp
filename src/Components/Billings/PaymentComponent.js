import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "Assets/css/siteinvoice.css";
import ModalComponent from "Components/UI/ModalComponent";
import TopupForm from "Components/Forms/TopUpForm";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundUpHelper from "Helpers/RoundUpHelper";
import AddCardModal from "Components/Billings/AddCardModal";
import CardListComponent from "Components/Billings/CardListComponent";
import { connect } from "react-redux";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
import "Assets/css/Responsive/SiteLaunch.css";
class PaymentComponent extends Component {
    state = {
        card_modal: false,
        topup_modal: false,
        card_id: null,
    };

    cardToggleModal = () => {
        const { card_modal } = this.state;
        this.setState({
            card_modal: !card_modal,
            card_id: null,
        });
    };
    topupModal = () => {
        const { topup_modal } = this.state;
        this.setState({
            topup_modal: !topup_modal,
        });
    };
    getCardId = (id) => {
        this.setState({
            card_id: id,
        });
    };
    handleChange = (event) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    };

    render() {
        this.props.getCard(this.state.card_id);
        const { wallet } = this.props;

        return (
            <React.Fragment>
                <Row className="mb-2">
                    <Col md={6} xs={6} className="invoice-topup">
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/General/wallet-icon.svg`}
                            alt="wordpresswhite"
                            className="invoice-detail-wallet-icon float-left"
                        />
                        Wallet
                        <FontAwesomeIcon
                            onClick={this.topupModal}
                            icon={faPlus}
                            className="wallet-icon invoice-topup-link ml-2"
                        />
                    </Col>
                    <Col md={6} xs={6} className="text-right">
                        ${" "}
                        {wallet.current_balance
                            ? RoundUpHelper.twodecimalplace(
                                  wallet.current_balance
                              )
                            : RoundUpHelper.twodecimalplace(0.0)}{" "}
                    </Col>
                </Row>

                <Row className="no-gutters">
                    <Col lg="10" md={10} xs={10} className="invoice-card ">
                        <CardListComponent
                            onChange={this.handleChange}
                            card={this.getCardId}
                            cardId={this.state.card_id}
                            fieldName={"card_id"}
                        />
                    </Col>
                    <Col lg="2" md={2} xs={2} className="invoice-card pl-3">
                        <Button
                            onClick={this.cardToggleModal}
                            className="btn-card btn-block pl-0 pr-0 bionic-btn"
                        >
                            <FontAwesomeIcon icon={faPlus} />{" "}
                        </Button>
                    </Col>
                </Row>

                <AddCardModal
                    show={this.state.card_modal}
                    onHide={this.cardToggleModal}
                />
                <ModalComponent
                    title={"Top Up"}
                    show={this.state.topup_modal}
                    toggle={this.topupModal}
                    component={
                        <TopupForm
                            dis={this.props.dispatch}
                            toggle={this.topupModal}
                            topUp={this.props.topUp}
                        />
                    }
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        topUp: state.topupReducer,
        wallet: state.cardList.wallet,
        cardList: state.cardList,
    };
}

export default connect(mapStateToProps)(PaymentComponent);
