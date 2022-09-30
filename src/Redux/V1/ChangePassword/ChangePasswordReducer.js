import PASSWORD from "./ChangePasswordActionType";

const ChangePasswordPutReducer = (
    state = {
        loading: false,
        success: false,
        change_password: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case PASSWORD.CHANGE_PASSWORD:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case PASSWORD.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                change_password: action.response,
            };
        case PASSWORD.CHANGE_PASSWORD_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default ChangePasswordPutReducer;
