import SITE_V6 from "Redux/V6/Sites/SiteList/SiteListActionTypeV6";

const siteGetV6 = (data) => {
    return {
        type: SITE_V6.SITE_V6_GET,
        request: data,
    };
};
const siteGetSuccessV6 = (data) => {
    return { type: SITE_V6.SITE_V6_GET_SUCCESS, response: data };
};
const siteGetFailedV6 = (data) => {
    return { type: SITE_V6.SITE_V6_GET_FAILED, response: data };
};

const SiteListActionV6 = {
    siteGetV6,
    siteGetSuccessV6,
    siteGetFailedV6,
};

export default SiteListActionV6;
