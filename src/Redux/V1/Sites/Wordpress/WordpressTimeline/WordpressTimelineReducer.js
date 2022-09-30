import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const WordpressTimelineReducer = (
    state = {
        loading: false,
        timeline: [],
        pagination: {},
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_TIMELINE:
            return {
                ...state,
                loading: true,
                timeline: [],
                pagination: {},
                success: false,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_TIMELINE_SUCCESS:
            return {
                ...state,
                loading: false,
                timeline: action.response.timeline,
                pagination: action.response.pagination,
                success: true,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_TIMELINE_FAILED:
            return {
                ...state,
                loading: false,
                timeline: [],
                pagination: {},
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WordpressTimelineReducer;
