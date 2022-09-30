import WORDPRESS from "Redux/V6/Sites/Wordpress/ActionTypeV6";

const wordpressLock = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_LOCK_V6,
        request: data,
    };
};
const wordpressLockSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_LOCK_V6_SUCCESS,
        response: data,
    };
};
const wordpressLockFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_LOCK_V6_FAILED,
        response: data,
    };
};

const WordpressLockActionV6 = {
    wordpressLock,
    wordpressLockSuccess,
    wordpressLockFailed,
};
export default WordpressLockActionV6;
