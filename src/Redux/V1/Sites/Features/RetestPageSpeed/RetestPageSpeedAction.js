import RETEST_PAGESPEED from "Redux/V1/Sites/SiteActionType";

const retestPageSpeed = (data) => {
    return {
        type: RETEST_PAGESPEED.RETEST_PAGESPEED,
        request: data,
    };
};
const retestPageSpeedSuccess = (data) => {
    return {
        type: RETEST_PAGESPEED.RETEST_PAGESPEED_SUCCESS,
        response: data,
    };
};
const retestPageSpeedFailed = (data) => {
    return {
        type: RETEST_PAGESPEED.RETEST_PAGESPEED_FAILED,
        response: data,
    };
};

const RetestPageSpeedAction = {
    retestPageSpeed,
    retestPageSpeedSuccess,
    retestPageSpeedFailed,
};
export default RetestPageSpeedAction;
