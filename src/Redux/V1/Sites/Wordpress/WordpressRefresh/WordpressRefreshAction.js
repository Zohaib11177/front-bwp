import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const wordpressRefresh = (identity) => {
    return {
        type: WORDPRESS.WORDPRESS_REFRESH,
        request: { identity },
    };
};
const wordpressRefreshSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_REFRESH_SUCCESS,
        response: data,
    };
};
const wordpressRefreshFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_REFRESH_FAILED,
        response: data,
    };
};
const WordpressRefreshAction = {
    wordpressRefresh,
    wordpressRefreshSuccess,
    wordpressRefreshFailed,
};
export default WordpressRefreshAction;
