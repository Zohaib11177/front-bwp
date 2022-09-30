import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const sitePlan = (data) => {
    return {
        type: SITE.SITE_PLAN_V6,
        request: data,
    };
};
const sitePlanSuccess = (data) => {
    return {
        type: SITE.SITE_PLAN_V6_SUCCESS,
        response: data,
    };
};
const sitePlanFailed = (data) => {
    return {
        type: SITE.SITE_PLAN_V6_FAILED,
        response: data,
    };
};

const SitePlanActionV6 = {
    sitePlan,
    sitePlanSuccess,
    sitePlanFailed,
};
export default SitePlanActionV6;
