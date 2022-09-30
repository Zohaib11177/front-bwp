import SITE from "Redux/V1/Sites/Site/ActionType";

const siteDeleteCancel = (data) => {
    return {
        type: SITE.SITE_DELETE_CANCEL,
        request: data,
    };
};
const siteDeleteCancelSuccess = (data) => {
    return {
        type: SITE.SITE_DELETE_CANCEL_SUCCESS,
        response: data,
    };
};
const siteDeleteCancelFailed = (data) => {
    return {
        type: SITE.SITE_DELETE_CANCEL_FAILED,
        response: data,
    };
};

const SiteDeleteCancelAction = {
    siteDeleteCancel,
    siteDeleteCancelSuccess,
    siteDeleteCancelFailed,
};
export default SiteDeleteCancelAction;
