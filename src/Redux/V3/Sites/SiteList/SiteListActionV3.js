import SITE_V3 from "Redux/V3/Sites/SiteList/SiteListActionTypeV3";

const siteGetV3 = (data) => {
    return {
        type: SITE_V3.SITE_V3_GET,
        request: data,
    };
};
const siteGetSuccessV3 = (data) => {
    return { type: SITE_V3.SITE_V3_GET_SUCCESS, response: data };
};
const siteGetFailedV3 = (data) => {
    return { type: SITE_V3.SITE_V3_GET_FAILED, response: data };
};

const SiteListActionV3 = {
    siteGetV3,
    siteGetSuccessV3,
    siteGetFailedV3,
};

export default SiteListActionV3;