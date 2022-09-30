import SITE from "Redux/V6/Sites/Features/ActionTypeV6";

const siteDbLogin = (data) => {
    return {
        type: SITE.SITE_DB_LOGIN_V6,
        request: data,
    };
};
const siteDbLoginSuccess = (data) => {
    return {
        type: SITE.SITE_DB_LOGIN_V6_SUCCESS,
        response: data,
    };
};
const siteDbLoginFailed = (data) => {
    return {
        type: SITE.SITE_DB_LOGIN_V6_FAILED,
        response: data,
    };
};

const SiteDbLoginActionV6 = {
    siteDbLogin,
    siteDbLoginSuccess,
    siteDbLoginFailed,
};
export default SiteDbLoginActionV6;
