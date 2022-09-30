import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const refreshPagespeed = (data) => {
    return {
        type: SITE.REFRESH_PAGESPEED_V6,
        request: data,
    };
};
const refreshPagespeedSuccess = (data) => {
    return {
        type: SITE.REFRESH_PAGESPEED_V6_SUCCESS,
        response: data,
    };
};
const refreshPagespeedFailed = (data) => {
    return {
        type: SITE.REFRESH_PAGESPEED_V6_FAILED,
        response: data,
    };
};

const RefreshPagespeedActionV6 = {
    refreshPagespeed,
    refreshPagespeedSuccess,
    refreshPagespeedFailed,
};
export default RefreshPagespeedActionV6;
