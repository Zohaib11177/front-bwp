import WORDPRESS from "Redux/V1/Sites/Wordpress/ActionType";

const wordpressLock = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_LOCK,
        request: data,
    };
};
const wordpressLockSuccess = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_LOCK_SUCCESS,
        response: data,
    };
};
const wordpressLockFailed = (data) => {
    return {
        type: WORDPRESS.WORDPRESS_LOCK_FAILED,
        response: data,
    };
};

const WordpressLockAction = {
    wordpressLock,
    wordpressLockSuccess,
    wordpressLockFailed,
};
export default WordpressLockAction;
