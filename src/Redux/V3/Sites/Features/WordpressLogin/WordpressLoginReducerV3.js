import FEATURE from "Redux/V3/Sites/Features/ActionTypeV3";

const WordpressLoginReducerV3 = (
    state = {
        loading: false,
        success: false,
        wordpress_login: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.WORDPRESS_LOGIN_V3:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                wordpress_login: {},
            };
        case FEATURE.WORDPRESS_LOGIN_SUCCESS_V3:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                wordpress_login: action.response,
            };
        case FEATURE.WORDPRESS_LOGIN_FAILED_V3:
            return {
                ...state,
                loading: false,
                success: false,
                wordpress_login: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WordpressLoginReducerV3;
