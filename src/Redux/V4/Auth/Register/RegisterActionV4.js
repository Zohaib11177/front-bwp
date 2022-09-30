import AUTH_V4 from "Redux/V4/Auth/ActionTypeV4";

const register = (data) => {
    return {
        type: AUTH_V4.REGISTRATION_V4,
        request: data,
    };
};
const registerSuccess = (data) => {
    return {
        type: AUTH_V4.REGISTRATION_SUCCESS_V4,
        response: data,
    };
};
const registerFailed = (data) => {
    return {
        type: AUTH_V4.REGISTRATION_FAILED_V4,
        response: data,
    };
};
const RegisterActionV4 = {
    register,
    registerSuccess,
    registerFailed,
};
export default RegisterActionV4;
