import FEATURE from "Redux/V1/Sites/Features/ActionType";

const WordpressLoginReducer = (
    state = {
        loading: false,
        success: false,
        wordpress_login: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.WORDPRESS_LOGIN:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                wordpress_login: {},
            };
        case FEATURE.WORDPRESS_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                wordpress_login: action.response,
            };
        case FEATURE.WORDPRESS_LOGIN_FAILED:
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

export default WordpressLoginReducer;
