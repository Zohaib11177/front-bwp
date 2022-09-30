import React, { Component } from "react";
import { connect } from "react-redux";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import CardBusiness from "Businesses/CardBusiness";
class CardListComponent extends Component {
    componentDidMount = () => {
        this.props.dispatch(CardListAction.cardGet());
    };

    render() {
        const { cardList, cardId, card } = this.props;
        return (
            <React.Fragment>
                <select
                    name={this.props.fieldName}
                    className="form-control "
                    onChange={this.props.onChange}
                    value={this.props.cardId}
                >
                    <option>Select Card</option>

                    {CardBusiness.generate(cardList, cardId, card)}
                </select>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        cardList: state.cardList.card_list,
    };
}
export default connect(mapStateToProps)(CardListComponent);
