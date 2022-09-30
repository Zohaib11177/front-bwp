import AUTH_V4 from "Redux/V4/Auth/ActionTypeV4";

const login = (request) => {
    return { type: AUTH_V4.LOGIN_V4, request };
};

const loginSuccess = (response) => {
    return { type: AUTH_V4.LOGIN_SUCCESS_V4, response };
};

const loginFailed = (response) => {
    return { type: AUTH_V4.LOGIN_FAILED_V4, response };
};

const LoginActionV4 = {
    login,
    loginSuccess,
    loginFailed,
};

export default LoginActionV4;
