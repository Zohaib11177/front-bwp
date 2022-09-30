import FEATURE from "Redux/V3/Sites/Features/ActionTypeV3";

const wordpressLogin = (data) => {
    return {
        type: FEATURE.WORDPRESS_LOGIN_V3,
        request: data,
    };
};
const wordpressLoginSuccess = (data) => {
    return {
        type: FEATURE.WORDPRESS_LOGIN_SUCCESS_V3,
        response: data,
    };
};
const wordpressLoginFailed = (data) => {
    return {
        type: FEATURE.WORDPRESS_LOGIN_FAILED_V3,
        response: data,
    };
};

const WordpressLoginActionV3 = {
    wordpressLogin,
    wordpressLoginSuccess,
    wordpressLoginFailed,
};
export default WordpressLoginActionV3;
