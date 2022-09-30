import SITE from "Redux/V1/Sites/Site/ActionType";

const siteGet = (data) => {
    return {
        type: SITE.SITE_GET,
        request: data,
    };
};
const siteGetSuccess = (data) => {
    return { type: SITE.SITE_GET_SUCCESS, response: data };
};
const siteGetFailed = (data) => {
    return { type: SITE.SITE_GET_FAILED, response: data };
};

const SiteListAction = {
    siteGet,
    siteGetSuccess,
    siteGetFailed,
};

export default SiteListAction;
