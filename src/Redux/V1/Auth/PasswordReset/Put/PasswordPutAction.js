import PASSWORD from "Redux/V1/Auth/PasswordReset/Put/ActionType";

const passwordPut = (data) => {
    return {
        type: PASSWORD.PASSWORD_PUT,
        request: data,
    };
};
const passwordPutSuccess = (data) => {
    return {
        type: PASSWORD.PASSWORD_PUT_SUCCESS,
        response: data,
    };
};
const passwordPutFailed = (data) => {
    return {
        type: PASSWORD.PASSWORD_PUT_FAILED,
        response: data,
    };
};

const PasswordResetAction = {
    passwordPut,
    passwordPutSuccess,
    passwordPutFailed,
};
export default PasswordResetAction;
