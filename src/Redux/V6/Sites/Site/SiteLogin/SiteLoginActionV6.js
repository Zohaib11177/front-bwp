import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteLogin = (data) => {
    return {
        type: SITE.SITE_LOGIN_V6,
        request: data,
    };
};
const siteLoginSuccess = (data) => {
    return {
        type: SITE.SITE_LOGIN_V6_SUCCESS,
        response: data,
    };
};
const siteLoginFailed = (data) => {
    return {
        type: SITE.SITE_LOGIN_V6_FAILED,
        response: data,
    };
};

const SiteLoginActionV6 = {
    siteLogin,
    siteLoginSuccess,
    siteLoginFailed,
};
export default SiteLoginActionV6;
