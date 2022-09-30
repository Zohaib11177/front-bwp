import SITE from "Redux/V1/Sites/Site/ActionType";

const siteRegion = (data) => {
    return {
        type: SITE.SITE_REGION,
        request: data,
    };
};
const siteRegionSuccess = (data) => {
    return {
        type: SITE.SITE_REGION_SUCCESS,
        response: data,
    };
};
const siteRegionFailed = (data) => {
    return {
        type: SITE.SITE_REGION_FAILED,
        response: data,
    };
};

const SiteRegionAction = {
    siteRegion,
    siteRegionSuccess,
    siteRegionFailed,
};
export default SiteRegionAction;
