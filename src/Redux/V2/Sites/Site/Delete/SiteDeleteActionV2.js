import SITE from "Redux/V2/Sites/Site/ActionTypeV2";

const siteDelete = (data) => {
    return {
        type: SITE.SITE_DELETE_V2,
        request: data,
    };
};
const siteDeleteSuccess = (data) => {
    return {
        type: SITE.SITE_DELETE_SUCCESS_V2,
        response: data,
    };
};
const siteDeleteFailed = (data) => {
    return {
        type: SITE.SITE_DELETE_FAILED_V2,
        response: data,
    };
};

const SiteDeleteActionV2 = {
    siteDelete,
    siteDeleteSuccess,
    siteDeleteFailed,
};

export default SiteDeleteActionV2;
