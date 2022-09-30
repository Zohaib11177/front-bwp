import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const WordpressContainerReducerV1 = (
    state = {
        loading: false,
        success: false,
        wordpress: [],
        pagination: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_CONTAINER_V1:
            return {
                ...state,
                loading: true,
                success: false,
                wordpress: [],
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_CONTAINER_SUCCESS_V1:
            return {
                ...state,
                loading: false,
                success: true,
                wordpress: action.response.content,
                pagination: action.response.pagination,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_CONTAINER_FAILED_V1:
            return {
                ...state,
                loading: false,
                success: false,
                wordpress: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WordpressContainerReducerV1;
