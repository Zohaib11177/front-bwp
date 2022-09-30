import SITE from "Redux/V1/Sites/Site/ActionType";

const siteCosting = (data) => {
    return {
        type: SITE.SITE_COSTING,
        request: data,
    };
};

const siteCostingSuccess = (data) => {
    return { type: SITE.SITE_COSTING_SUCCESS, response: data };
};
const siteCostingFailed = (data) => {
    return { type: SITE.SITE_COSTING_FAILED, response: data };
};

const SiteCostingAction = {
    siteCosting,
    siteCostingSuccess,
    siteCostingFailed,
};

export default SiteCostingAction;
