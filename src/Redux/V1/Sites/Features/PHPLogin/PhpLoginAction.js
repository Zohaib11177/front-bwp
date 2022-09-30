import FEATURE from "Redux/V1/Sites/Features/ActionType";

const phpLogin = (data) => {
    return {
        type: FEATURE.PHP_LOGIN,
        request: data,
    };
};
const phpLoginSuccess = (data) => {
    return {
        type: FEATURE.PHP_LOGIN_SUCCESS,
        response: data,
    };
};
const phpLoginFailed = (data) => {
    return {
        type: FEATURE.PHP_LOGIN_FAILED,
        response: data,
    };
};

const PhpLoginAction = {
    phpLogin,
    phpLoginSuccess,
    phpLoginFailed,
};
export default PhpLoginAction;
