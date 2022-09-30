import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
const WpUpdateAllReducer = (
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
        case WORDPRESS.WORDPRESS_UPDATE_ALL:
            return {
                ...state,
                loading: true,
                err_mess: null,
                update_slug: "all",
                success: false,
                wordpress_update: [],
            };
        case WORDPRESS.WORDPRESS_UPDATE_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                wordpress_update: action.response,
                update_slug: null,
                success: true,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_UPDATE_ALL_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                update_slug: null,
                wordpress_update: [],
                success: false,
            };
        default:
            return state;
    }
};

export default WpUpdateAllReducer;
