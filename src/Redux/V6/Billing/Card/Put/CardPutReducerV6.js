import CARD from "Redux/V6/Billing/Card/ActionTypeV6";

const CardPrimaryReducerV6 = (
    state = {
        loading: false,
        success: false,
        card_primary: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case CARD.CARD_PUT_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case CARD.CARD_PUT_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                card_primary: action.response,
            };
        case CARD.CARD_PUT_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CardPrimaryReducerV6;
