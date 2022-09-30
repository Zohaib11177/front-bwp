import AUTH_V6 from "Redux/V6/Auth/ActionTypeV6";
import LoginHelper from "Helpers/LoginHelper";

const LoginReducerV6 = (
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
        case AUTH_V6.LOGIN_V6:
            return { ...state, loading: true };
        case AUTH_V6.LOGIN_SUCCESS_V6:
            return { ...state, loading: false, login: action.response };
        case AUTH_V6.LOGIN_FAILED_V6:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default LoginReducerV6;
