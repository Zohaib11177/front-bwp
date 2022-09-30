import SITE from "Redux/V2/Sites/Site/ActionTypeV2";

const siteCosting = (data) => {
    return {
        type: SITE.SITE_COSTING_V2,
        request: data,
    };
};

const siteCostingSuccess = (data) => {
    return { type: SITE.SITE_COSTING_SUCCESS_V2, response: data };
};
const siteCostingFailed = (data) => {
    return { type: SITE.SITE_COSTING_FAILED_V2, response: data };
};

const SiteCostingActionV2 = {
    siteCosting,
    siteCostingSuccess,
    siteCostingFailed,
};

export default SiteCostingActionV2;
