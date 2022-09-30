import OPERATION from "Redux/V6/Sites/Operations/ActionTypeV6";

const CacheClearAllReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case OPERATION.CACHE_ALL_CLEAR_V6:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case OPERATION.CACHE_ALL_CLEAR_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
            };
        case OPERATION.CACHE_ALL_CLEAR_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default CacheClearAllReducerV6;
