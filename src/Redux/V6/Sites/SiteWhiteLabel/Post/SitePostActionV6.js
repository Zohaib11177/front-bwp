import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";

const siteWLPost = (data) => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_POST_V6,
        request: data,
    };
};
const siteWLPostSuccess = (data) => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6_SUCCESS,
        response: data,
    };
};
const siteWLPostFailed = () => {
    return {
        type: SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6_FAILED,
    };
};

const SiteWLPostActionV6 = {
    siteWLPost,
    siteWLPostSuccess,
    siteWLPostFailed,
};
export default SiteWLPostActionV6;
