import PASSWORD from "Redux/V1/Auth/PasswordForgot/Post/ActionType";

const passwordPost = (data) => {
    return {
        type: PASSWORD.PASSWORD_POST,
        request: data,
    };
};
const passwordPostSuccess = (data) => {
    return {
        type: PASSWORD.PASSWORD_POST_SUCCESS,
        response: data,
    };
};
const passwordPostFailed = (data) => {
    return {
        type: PASSWORD.PASSWORD_POST_FAILED,
        response: data,
    };
};

const ForgotPasswordAction = {
    passwordPost,
    passwordPostSuccess,
    passwordPostFailed,
};
export default ForgotPasswordAction;
