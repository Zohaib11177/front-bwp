import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const WpUpdateAllReducerV1 = (
    state = {
        loading: false,
        err_mess: null,
        success: false,
        wordpress_update: [],
        update_slug: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_UPDATE_ALL_V1:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                update_slug: action.request.slug,
                wordpress_update: [],
            };
        case WORDPRESS.WORDPRESS_UPDATE_ALL_SUCCESS_V1:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                wordpress_update: action.response,
                update_slug: null,
            };
        case WORDPRESS.WORDPRESS_UPDATE_ALL_FAILED_V1:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                success: false,
                wordpress_update: [],
                update_slug: null,
            };
        default:
            return state;
    }
};

export default WpUpdateAllReducerV1;
