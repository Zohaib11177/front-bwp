import AUTH_V6 from "Redux/V6/Auth/ActionTypeV6";

const login = (request) => {
    return { type: AUTH_V6.LOGIN_V6, request };
};

const loginSuccess = (response) => {
    return { type: AUTH_V6.LOGIN_SUCCESS_V6, response };
};

const loginFailed = (response) => {
    return { type: AUTH_V6.LOGIN_FAILED_V6, response };
};

const LoginActionV4 = {
    login,
    loginSuccess,
    loginFailed,
};

export default LoginActionV4;
