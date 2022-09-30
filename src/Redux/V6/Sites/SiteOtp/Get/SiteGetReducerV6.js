import SITE_OTP from "Redux/V6/Sites/SiteOtp/ActionTypeV6";

const SiteOtpGetReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
        otp : {}
    },
    action
) => {
    switch (action.type) {
        case SITE_OTP.SITE_OTP_GET_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case SITE_OTP.SITE_OTP_GET_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                otp : action.response.otp
            };
        case SITE_OTP.SITE_OTP_GET_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SiteOtpGetReducerV6;
