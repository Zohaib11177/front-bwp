import TOPUP from "Redux/V1/Topup/ActionTypes";

const TopupReducer = (
    state = {
        loading: false,
        success: false,
        top_up: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case TOPUP.TOPUP_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case TOPUP.TOPUP_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                top_up: action.response.wallet,
            };
        case TOPUP.TOPUP_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default TopupReducer;
