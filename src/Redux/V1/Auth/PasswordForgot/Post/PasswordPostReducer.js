import PASSWORD from "Redux/V1/Auth/PasswordForgot/Post/ActionType";

const ForgotPasswordReducer = (
    state = {
        loading: false,
        success: false,
        password: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case PASSWORD.PASSWORD_POST:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case PASSWORD.PASSWORD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                password: action.response,
            };
        case PASSWORD.PASSWORD_POST_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default ForgotPasswordReducer;
