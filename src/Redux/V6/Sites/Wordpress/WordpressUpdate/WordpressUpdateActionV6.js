import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";

const wordpressUpdate = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_V6,
        request: data,
    };
};
const wordpressUpdateSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_V6_SUCCESS,
        response: data,
    };
};
const wordpressUpdateFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_UPDATE_V6_FAILED,
        response: data,
    };
};

const WordpressUpdateActionV6 = {
    wordpressUpdate,
    wordpressUpdateSuccess,
    wordpressUpdateFailed,
};
export default WordpressUpdateActionV6;
