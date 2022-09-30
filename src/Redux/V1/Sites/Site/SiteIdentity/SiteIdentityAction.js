import SITE from "Redux/V1/Sites/Site/ActionType";

const siteIdentity = (data) => {
    return {
        type: SITE.SITE_IDENTITY,
        request: data,
    };
};
const siteIdentitySuccess = (data) => {
    return {
        type: SITE.SITE_IDENTITY_SUCCESS,
        response: data,
    };
};
const siteIdentityFailed = (data) => {
    return {
        type: SITE.SITE_IDENTITY_FAILED,
        response: data,
    };
};

const SiteIdentityAction = {
    siteIdentity,
    siteIdentitySuccess,
    siteIdentityFailed,
};
export default SiteIdentityAction;
