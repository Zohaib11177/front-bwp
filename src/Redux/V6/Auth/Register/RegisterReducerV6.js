import AUTH_V6 from "Redux/V6/Auth/ActionTypeV6";

const RegisterReducerV6 = (
    state = {
        loading: false,
        err_mess: "",
        success: false,
    },
    action
) => {
    switch (action.type) {
        case AUTH_V6.REGISTRATION_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case AUTH_V6.REGISTRATION_SUCCESS_V6:
            return { ...state, loading: false, success: true };
        case AUTH_V6.REGISTRATION_FAILED_V6:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default RegisterReducerV6;
