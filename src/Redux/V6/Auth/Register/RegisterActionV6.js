import AUTH_V6 from "Redux/V6/Auth/ActionTypeV6";

const register = (data) => {
    return {
        type: AUTH_V6.REGISTRATION_V6,
        request: data,
    };
};
const registerSuccess = (data) => {
    return {
        type: AUTH_V6.REGISTRATION_SUCCESS_V6,
        response: data,
    };
};
const registerFailed = (data) => {
    return {
        type: AUTH_V6.REGISTRATION_FAILED_V6,
        response: data,
    };
};
const RegisterActionV6 = {
    register,
    registerSuccess,
    registerFailed,
};
export default RegisterActionV6;
