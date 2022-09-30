import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";

const siteWLGet = (data) => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6,
        request: data,
    };
};
const siteWLGetSuccess = (data) => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6_SUCCESS,
        response: data,
    };
};
const siteWLGetFailed = (data) => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6_FAILED,
        response: data,
    };
};

const SiteWLGetActionV6 = {
    siteWLGet,
    siteWLGetSuccess,
    siteWLGetFailed,
};
export default SiteWLGetActionV6;
