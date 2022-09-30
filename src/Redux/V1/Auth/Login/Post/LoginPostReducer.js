import LOGIN from "Redux/V1/Auth/Login/Post/ActionType";
import LoginHelper from "Helpers/LoginHelper";

const LoginReducer = (
    state = {
        loading: false,
        isAuthenticated: localStorage.getItem("access_token") ? true : false,
        token: localStorage.getItem("access_token"),
        user: localStorage.getItem("user")
            ? LoginHelper.localData(localStorage.getItem("user"))
            : {},
        permissions: localStorage.getItem("permissions")
            ? LoginHelper.localData(localStorage.getItem("permissions"))
            : [],
        form: {},
        wallet: localStorage.getItem("wallet")
            ? LoginHelper.localData(localStorage.getItem("wallet"))
            : {},
        affiliate_code: localStorage.getItem("affiliate_code") || null,
    },
    action
) => {
    switch (action.type) {
        case LOGIN.LOGIN_POST:
            return { ...state, loading: true };
        case LOGIN.LOGIN_POST_SUCCESS:
            return { ...state, loading: false, login: action.response };
        case LOGIN.LOGIN_POST_FAILED:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default LoginReducer;
