import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";
const WordpressContainerReducer = (
    state = {
        loading: false,
        success: false,
        wordpress: [],
        cores: [],
        themes: [],
        plugins: [],
        domains: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WORDPRESS_CONTAINER:
            return {
                ...state,
                loading: true,
                success: false,
                wordpress: [],
                cores: [],
                themes: [],
                plugins: [],
                domains: [],
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_CONTAINER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                wordpress: action.response.content,
                cores: action.response.content.cores,
                themes: action.response.content.themes,
                plugins: action.response.content.plugins,
                domains: action.response.content.domains,
                err_mess: null,
            };
        case WORDPRESS.WORDPRESS_CONTAINER_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                wordpress: [],
                cores: [],
                themes: [],
                plugins: [],
                domains: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WordpressContainerReducer;
