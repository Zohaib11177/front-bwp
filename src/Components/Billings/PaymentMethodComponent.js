import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import WalletCardComponent from "Components/Billings/WalletCardComponent";
import ModalComponent from "Components/UI/ModalComponent";
import TopupForm from "Components/Forms/TopUpForm";
import AddCardModal from "Components/Billings/AddCardModal";
import CardUpdateModal from "Components/Billings/CardUpdateModal";
import CardPrimaryActionV6 from "Redux/V6/Billing/Card/Put/CardPutActionV6";
import CardDeleteActionV6 from "Redux/V6/Billing/Card/Delete/CardDeleteActionV6";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import BillingBusiness from "Businesses/BillingBusiness";
import Confirm from "Helpers/ConfirmationHelper";
import Configs from "Configs";
import { ReactSVG } from "react-svg";
import "Assets/css/billing.css";

class PaymentMethodComponent extends Component {
    state = {
        card_modal: false,
        card_update_modal: false,
        primary: true,
        topup_modal: false,
        update_modal_state: {
            holder_name: "",
            card_number: "",
            exp_year: "",
            exp_month: "",
            cvc: "",
            is_primary: false,
        }

    };
    componentDidMount = () => {
        this.props.dispatch(CardListAction.cardGet());
    };
    cardPrimaryFunction = (id) => {
        this.props.dispatch(CardPrimaryActionV6.cardPut(id));
    };
    cardDeleteFunction = (id) => {
        Confirm(this.props.dispatch, CardDeleteActionV6.cardDelete(id));
    };
    topupModalFunction = () => {
        const { topup_modal } = this.state;
        this.setState({
            topup_modal: !topup_modal,
        });
    };
    cardToggleModal = () => {
        const { card_modal } = this.state;
        this.setState({
            card_modal: !card_modal,
        });
    };

    cardToggleUpdateModal = (id) => {

        const { card_update_modal } = this.state;

        this.setState({
            card_update_modal: !card_update_modal,
        });

        const { card_list } = this.props.cardList

        const selectedCardDetail = card_list.find(card => card.id === id)

        this.setState({
            update_modal_state: selectedCardDetail
        })
        
    };


    handleChange = (event) => {
        // const errorUpdate = ErrorBusiness.errorRemove(
        //     this.state.error,
        //     event.target.name
        // );
        // this.setState({
        //     error: errorUpdate,
        // });
        const target = event.target;
        const { update_modal_state } = this.state;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            update_modal_state: {
                ...update_modal_state,
                [name]: value,
            },
        });
    };

    render() {
        const { card_list, wallet } = this.props.cardList;
        const { cardDelete, topUp } = this.props;
        const { card_update_modal } = this.state;

        if (this.props.topUp.success) {
            setTimeout(() => {
                window.location.href = "/billing";
            }, 1000);
        }
        return (
            <React.Fragment>
                <div className="page-header">
                    Payment Methods
                    {this.props.cardList.loading ? (
                        <span
                            className="spinner-grow spinner-grow-sm text-secondary "
                            role="status"
                        ></span>
                    ) : null}
                    <div className="heading-icon">
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-credit-card.svg`}
                            alt="gauge"
                            className="billing-payment-icon"
                        />
                    </div>
                </div>
                <div className="box">
                    <Row>
                        <WalletCardComponent
                            wallet={wallet}
                            topUp={topUp}
                            topUpFunction={this.topupModalFunction}
                        />
                        {BillingBusiness.cardGenerate(
                            card_list,
                            this.cardPrimaryFunction,
                            this.cardDeleteFunction,
                            this.cardToggleUpdateModal,
                            cardDelete
                        )}
                        <Col lg="12 text-right mt-4">
                            <Button
                                onClick={this.cardToggleModal}
                                className="btn savebtn bionic-btn"
                            >
                                Add Payment Method
                            </Button>
                        </Col>
                    </Row>
                </div>{" "}

                <AddCardModal
                    show={this.state.card_modal}
                    onHide={this.cardToggleModal}
                />

                <CardUpdateModal
                    show={this.state.card_update_modal}
                    onHide={() => this.setState({ card_update_modal: !card_update_modal })}
                    card_state={this.state.update_modal_state}
                    handleChange={this.handleChange}
                />
                
                <ModalComponent
                    title={"Top Up"}
                    show={this.state.topup_modal}
                    toggle={this.topupModal}
                    component={
                        <TopupForm
                            dis={this.props.dispatch}
                            toggle={this.topupModalFunction}
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
        cardList: state.cardList,
        cardDelete: state.billingV6.cardV6.cardDelete,
        topUp: state.topupReducer,
    };
}
export default connect(mapStateToProps)(PaymentMethodComponent);
