import OPERATION from "Redux/V1/Sites/Operations/ActionType";

const CacheClearAllReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case OPERATION.CACHE_ALL_CLEAR:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case OPERATION.CACHE_ALL_CLEAR_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
            };
        case OPERATION.CACHE_ALL_CLEAR_FAILED:
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

export default CacheClearAllReducer;
