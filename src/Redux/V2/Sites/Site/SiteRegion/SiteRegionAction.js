import SITE from "Redux/V2/Sites/Site/ActionTypeV2";

const siteRegion = (data) => {
    console.log("v2 hit");
    return {
        type: SITE.SITE_REGION_V2,
        request: data,
    };
};
const siteRegionSuccess = (data) => {
    return {
        type: SITE.SITE_REGION_V2_SUCCESS,
        response: data,
    };
};
const siteRegionFailed = (data) => {
    return {
        type: SITE.SITE_REGION_V2_FAILED,
        response: data,
    };
};

const SiteRegionAction = {
    siteRegion,
    siteRegionSuccess,
    siteRegionFailed,
};
export default SiteRegionAction;
