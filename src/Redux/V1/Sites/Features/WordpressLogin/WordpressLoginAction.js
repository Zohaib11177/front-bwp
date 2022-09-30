import FEATURE from "Redux/V1/Sites/Features/ActionType";

const wordpressLogin = (data) => {
    return {
        type: FEATURE.WORDPRESS_LOGIN,
        request: data,
    };
};
const wordpressLoginSuccess = (data) => {
    return {
        type: FEATURE.WORDPRESS_LOGIN_SUCCESS,
        response: data,
    };
};
const wordpressLoginFailed = (data) => {
    return {
        type: FEATURE.WORDPRESS_LOGIN_FAILED,
        response: data,
    };
};

const WordpressLoginAction = {
    wordpressLogin,
    wordpressLoginSuccess,
    wordpressLoginFailed,
};
export default WordpressLoginAction;
