import CARD from "Redux/V6/Billing/Card/ActionTypeV6";

const CardDeleteReducerV6 = (
    state = {
        loading: false,
        success: false,
        card_delete: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case CARD.CARD_DELETE_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case CARD.CARD_DELETE_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                card_delete: action.response,
            };
        case CARD.CARD_DELETE_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CardDeleteReducerV6;
