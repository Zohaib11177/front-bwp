import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const WordpressUpdateReducer = (
    state = {
        loading: false,
        wordpress_update: [],
        err_mess: null,
        update_slug: null,
        success: false,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_UPDATE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                update_slug: action.request.slug,
                wordpress_update: [],
                success: false,
            };
        case WORDPRESS.WORDPRESS_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                wordpress_update: action.response,
                update_slug: null,
                success: false,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                update_slug: null,
                wordpress_update: action.response,
                success: false,
            };
        default:
            return state;
    }
};

export default WordpressUpdateReducer;
