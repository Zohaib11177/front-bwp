import AUTH from "Redux/V1/Auth/AuthActionType";

const logout = (data) => {
    return {
        type: AUTH.LOGOUT,
        request: data,
    };
};
const logoutSuccess = (data) => {
    return {
        type: AUTH.LOGOUT_SUCCESS,
        response: data,
    };
};
const logoutFailed = (data) => {
    return {
        type: AUTH.LOGOUT_FAILED,
        response: data,
    };
};

const LogoutAction = {
    logout,
    logoutSuccess,
    logoutFailed,
};

export default LogoutAction;
