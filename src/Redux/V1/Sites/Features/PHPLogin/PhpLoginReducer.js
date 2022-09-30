import FEATURE from "Redux/V1/Sites/Features/ActionType";

const PhpLoginReducer = (
    state = {
        loading: false,
        success: false,
        php_login: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.PHP_LOGIN:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                php_login: {},
            };
        case FEATURE.PHP_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                php_login: action.response,
            };
        case FEATURE.PHP_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                php_login: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default PhpLoginReducer;
