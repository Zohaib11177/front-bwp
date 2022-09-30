import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteResource = (data) => {
    return {
        type: SITE.SITE_RESOURCE_V6,
        request: data,
    };
};
const siteResourceSuccess = (data) => {
    return {
        type: SITE.SITE_RESOURCE_V6_SUCCESS,
        response: data,
    };
};
const siteResourceFailed = (data) => {
    return {
        type: SITE.SITE_RESOURCE_V6_FAILED,
        response: data,
    };
};

const SiteResourceActionV6 = {
    siteResource,
    siteResourceSuccess,
    siteResourceFailed,
};
export default SiteResourceActionV6;
