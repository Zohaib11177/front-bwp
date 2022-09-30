import SITE_OTP from "Redux/V6/Sites/SiteOtp/ActionTypeV6";

const siteGet = (data) => {
    return {
        type: SITE_OTP.SITE_OTP_GET_V6,
        request: data,
    };
};
const siteGetSuccess = (data) => {
    return {
        type: SITE_OTP.SITE_OTP_GET_V6_SUCCESS,
        response: data,
    };
};
const siteGetFailed = (data) => {
    return {
        type: SITE_OTP.SITE_OTP_GET_V6_FAILED,
        response: data,
    };
};

const SiteOtpGetActionV6 = {
    siteGet,
    siteGetSuccess,
    siteGetFailed,
};
export default SiteOtpGetActionV6;
