import AUTH_V4 from "Redux/V4/Auth/ActionTypeV4";

const RegisterReducerV4 = (
    state = {
        loading: false,
        err_mess: "",
        success: false,
    },
    action
) => {
    switch (action.type) {
        case AUTH_V4.REGISTRATION_V4:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case AUTH_V4.REGISTRATION_SUCCESS_V4:
            return { ...state, loading: false, success: true };
        case AUTH_V4.REGISTRATION_FAILED_V4:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default RegisterReducerV4;
