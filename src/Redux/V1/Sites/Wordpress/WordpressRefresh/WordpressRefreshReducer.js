import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const WordpressRefreshReducer = (
    state = {
        loading: false,
        success: false,
        wordpress_refresh: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_REFRESH:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
                wordpress_refresh: [],
            };
        case WORDPRESS.WORDPRESS_REFRESH_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                wordpress_refresh: action.response.wordpress_get,
            };
        case WORDPRESS.WORDPRESS_REFRESH_FAILED:
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

export default WordpressRefreshReducer;
