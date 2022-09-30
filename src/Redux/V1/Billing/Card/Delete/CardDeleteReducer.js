import CARD from "Redux/V1/Billing/Card/ActionType";

const CardDeleteReducer = (
    state = {
        loading: false,
        success: false,
        card_delete: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case CARD.CARD_DELETE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case CARD.CARD_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                card_delete: action.response,
            };
        case CARD.CARD_DELETE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CardDeleteReducer;
