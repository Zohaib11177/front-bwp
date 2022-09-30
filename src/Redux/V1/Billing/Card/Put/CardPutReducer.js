import CARD from "Redux/V1/Billing/Card/ActionType";

const CardPrimaryReducer = (
    state = {
        loading: false,
        success: false,
        card_primary: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case CARD.CARD_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case CARD.CARD_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                card_primary: action.response,
            };
        case CARD.CARD_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CardPrimaryReducer;
