import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";

const wordpressRefresh = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_REFRESH_V6,
        request: data,
    };
};
const wordpressRefreshSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_REFRESH_V6_SUCCESS,
        response: data,
    };
};
const wordpressRefreshFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_REFRESH_V6_FAILED,
        response: data,
    };
};
const WordpressRefreshActionV6 = {
    wordpressRefresh,
    wordpressRefreshSuccess,
    wordpressRefreshFailed,
};
export default WordpressRefreshActionV6;
