import CARD from "Redux/V1/Billing/Card/ActionType";

const CardAddReducer = (
    state = {
        loading: false,
        success: false,
        card: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case CARD.CARD_POST:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case CARD.CARD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                card: action.response,
                success: true,
            };
        case CARD.CARD_POST_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CardAddReducer;
