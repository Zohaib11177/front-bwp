import AUTH from "Redux/V1/Auth/AuthActionType";

const accVerificationResend = (data) => {
    return {
        type: AUTH.ACC_VERIFICATION_RESEND,
        request: data,
    };
};
const accVerificationResendSuccess = (data) => {
    return {
        type: AUTH.ACC_VERIFICATION_RESEND_SUCCESS,
        response: data,
    };
};
const accVerificationResendFailed = (data) => {
    return {
        type: AUTH.ACC_VERIFICATION_RESEND_FAILED,
        response: data,
    };
};

const AccVerificationResendAction = {
    accVerificationResend,
    accVerificationResendSuccess,
    accVerificationResendFailed,
};
export default AccVerificationResendAction;
