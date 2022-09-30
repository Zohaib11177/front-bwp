import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const wordpressGet = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_GET,
        request: data,
    };
};
const wordpressGetSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_GET_SUCCESS,
        response: data,
    };
};
const wordpressGetFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_GET_FAILED,
        response: data,
    };
};

const WordpressListAction = {
    wordpressGet,
    wordpressGetSuccess,
    wordpressGetFailed,
};

export default WordpressListAction;
