import SITE_OTP from "Redux/V6/Sites/SiteOtp/ActionTypeV6";

const sitePut = (data) => {
    return {
        type: SITE_OTP.SITE_OTP_PUT_V6,
        request: data,
    };
};
const sitePutSuccess = (data) => {
    return {
        type: SITE_OTP.SITE_OTP_PUT_V6_SUCCESS,
        response: data,
    };
};
const sitePutFailed = (data) => {
    return {
        type: SITE_OTP.SITE_OTP_PUT_V6_FAILED,
        response: data,
    };
};

const SiteOtpPutActionV6 = {
    sitePut,
    sitePutSuccess,
    sitePutFailed,
};
export default SiteOtpPutActionV6;
