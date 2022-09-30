import SITE_PORTAL_SETTINGS_GET_V6 from "Redux/V6/Sites/SitePortalSettings/ActionTypeV6";

const sitePSGet = () => {
    return {
        type: SITE_PORTAL_SETTINGS_GET_V6.SITE_PORTAL_SETTINGS_GET_V6,
    };
};
const sitePSGetSuccess = (data) => {
    return {
        type: SITE_PORTAL_SETTINGS_GET_V6.SITE_PORTAL_SETTINGS_GET_V6_SUCCESS,
        response: data,
    };
};
const sitePSGetFailed = (data) => {
    return {
        type: SITE_PORTAL_SETTINGS_GET_V6.SITE_PORTAL_SETTINGS_GET_V6_FAILED,
        response: data,
    };
};

const SitePSGetActionV6 = {
    sitePSGet,
    sitePSGetSuccess,
    sitePSGetFailed,
};
export default SitePSGetActionV6;
