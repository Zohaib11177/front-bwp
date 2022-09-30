import PASSWORD from "./ChangePasswordActionType";

const passwordPut = (data) => {
    return {
        type: PASSWORD.CHANGE_PASSWORD,
        request: data,
    };
};
const passwordPutSuccess = (data) => {
    return {
        type: PASSWORD.CHANGE_PASSWORD_SUCCESS,
        response: data,
    };
};
const passwordPutFailed = (data) => {
    return {
        type: PASSWORD.CHANGE_PASSWORD_FAILED,
        response: data,
    };
};

const ChangePasswordAction = {
    passwordPut,
    passwordPutSuccess,
    passwordPutFailed,
};
export default ChangePasswordAction;
