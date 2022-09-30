import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";

const siteWLPut = (data) => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_PUT_V6,
        request: data,
    };
};
const siteWLPutSuccess = (data) => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_PUT_V6_SUCCESS,
        response: data,
    };
};
const siteWLPutFailed = () => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_PUT_V6_FAILED,
    };
};

const SiteWLPutActionV6 = {
    siteWLPut,
    siteWLPutSuccess,
    siteWLPutFailed,
};
export default SiteWLPutActionV6;
