import REGISTER from "Redux/V3/Auth/Register/Post/ActionType";

const registerPost = (data) => {
    return {
        type: REGISTER.REGISTRATION_POST,
        request: data,
    };
};
const registerPostSuccess = (data) => {
    return {
        type: REGISTER.REGISTRATION_POST_SUCCESS,
        response: data,
    };
};
const registerPostFailed = (data) => {
    return {
        type: REGISTER.REGISTRATION_POST_FAILED,
        response: data,
    };
};
const RegisterAction = {
    registerPost,
    registerPostSuccess,
    registerPostFailed,
};
export default RegisterAction;
