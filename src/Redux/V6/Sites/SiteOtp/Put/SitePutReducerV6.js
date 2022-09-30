import SITE_OTP from "Redux/V6/Sites/SiteOtp/ActionTypeV6";

const SiteOtpPutReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case SITE_OTP.SITE_OTP_PUT_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case SITE_OTP.SITE_OTP_PUT_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case SITE_OTP.SITE_OTP_PUT_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SiteOtpPutReducerV6;
