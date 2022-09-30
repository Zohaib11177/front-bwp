import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteRegion = (data) => {
    return {
        type: SITE.SITE_REGION_V6,
        request: data,
    };
};
const siteRegionSuccess = (data) => {
    return {
        type: SITE.SITE_REGION_V6_SUCCESS,
        response: data,
    };
};
const siteRegionFailed = (data) => {
    return {
        type: SITE.SITE_REGION_V6_FAILED,
        response: data,
    };
};

const SiteRegionActionV6 = {
    siteRegion,
    siteRegionSuccess,
    siteRegionFailed,
};
export default SiteRegionActionV6;
