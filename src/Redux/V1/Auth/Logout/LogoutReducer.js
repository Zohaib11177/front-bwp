import AUTH from "Redux/V1/Auth/AuthActionType";

const LogoutReducer = (
    state = {
        loading: false,
        success: false,
        logout: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case AUTH.LOGOUT:
            return {
                ...state,
                loading: true,
            };
        case AUTH.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                logout: action.response,
            };
        case AUTH.LOGOUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default LogoutReducer;
