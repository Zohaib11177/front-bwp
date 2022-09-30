import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteCancelDelete = (data) => {
    return {
        type: SITE.SITE_CANCEL_DELETE_V6,
        request: data,
    };
};
const siteCancelDeleteSuccess = (data) => {
    return {
        type: SITE.SITE_CANCEL_DELETE_V6_SUCCESS,
        response: data,
    };
};
const siteCancelDeleteFailed = (data) => {
    return {
        type: SITE.SITE_CANCEL_DELETE_V6_FAILED,
        response: data,
    };
};

const SiteCancelDeleteActionV6 = {
    siteCancelDelete,
    siteCancelDeleteSuccess,
    siteCancelDeleteFailed,
};
export default SiteCancelDeleteActionV6;
