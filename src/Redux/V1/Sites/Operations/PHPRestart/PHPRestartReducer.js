import OPERATION from "Redux/V1/Sites/Operations/ActionType";

const PhpRestartReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case OPERATION.PHP_RESTART:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case OPERATION.PHP_RESTART_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
            };
        case OPERATION.PHP_RESTART_FAILED:
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

export default PhpRestartReducer;
