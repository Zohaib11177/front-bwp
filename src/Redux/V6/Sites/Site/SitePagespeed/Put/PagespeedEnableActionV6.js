import PAGESPEED from "Redux/V6/Sites/Site/ActionTypeV6";

const pagespeedEnable = (data) => {
    return {
        type: PAGESPEED.PAGESPEED_ENABLE_V6,
        request: data,
    };
};
const pagespeedEnableSuccess = (data) => {
    return {
        type: PAGESPEED.PAGESPEED_ENABLE_V6_SUCCESS,
        response: data,
    };
};
const pagespeedEnableFailed = (data) => {
    return {
        type: PAGESPEED.PAGESPEED_ENABLE_V6_FAILED,
        response: data,
    };
};
const PagespeedEnableActionV6 = {
    pagespeedEnable,
    pagespeedEnableSuccess,
    pagespeedEnableFailed,
};
export default PagespeedEnableActionV6;
