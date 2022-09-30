import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const WordpressListReducer = (
    state = {
        loading: false,
        wordpress: {},
        themes: [],
        plugins: [],
        timeline: [],
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_GET:
            return {
                ...state,
                loading: true,
                wordpress: {},
                themes: [],
                plugins: [],
                timeline: [],
                success: false,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                wordpress: action.response.updates.core,
                themes: action.response.updates.theme,
                plugins: action.response.updates.plugin,
                timeline: action.response.timeline.data,
                success: true,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_GET_FAILED:
            return {
                ...state,
                loading: false,
                wordpress: {},
                themes: [],
                plugins: [],
                timeline: [],
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WordpressListReducer;
