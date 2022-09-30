import AUTH from "Redux/V1/Auth/AuthActionType";

const AccVerificationResendReducer = (
    state = {
        loading: false,
        success: false,
        verification_resend: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case AUTH.ACC_VERIFICATION_RESEND:
            return {
                ...state,
                loading: true,
                success: false,
                verification_resend: {},
                err_mess: null,
            };
        case AUTH.ACC_VERIFICATION_RESEND_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                verification_resend: action.response,
                err_mess: null,
            };
        case AUTH.ACC_VERIFICATION_RESEND_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                success: false,
                verification_resend: {},
            };
        default:
            return state;
    }
};

export default AccVerificationResendReducer;
