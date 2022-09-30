import CARD from "Redux/V6/Billing/Card/ActionTypeV6";

const CardAddReducerV6 = (
    state = {
        loading: false,
        success: false,
        card: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case CARD.CARD_POST_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case CARD.CARD_POST_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                card: action.response,
                success: true,
            };
        case CARD.CARD_POST_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CardAddReducerV6;
