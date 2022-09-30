import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";

const WordpressRefreshReducerV6 = (
    state = {
        loading: false,
        success: false,
        wordpress_refresh: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_REFRESH_V6:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
                wordpress_refresh: [],
            };
        case WORDPRESS.WORDPRESS_REFRESH_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                wordpress_refresh: action.response.wordpress_get,
            };
        case WORDPRESS.WORDPRESS_REFRESH_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                wordpress_refresh: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WordpressRefreshReducerV6;
