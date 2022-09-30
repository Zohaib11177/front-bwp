import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteDelete = (data) => {
    return {
        type: SITE.SITE_DELETE_V6,
        request: data,
    };
};
const siteDeleteSuccess = (data) => {
    return {
        type: SITE.SITE_DELETE_V6_SUCCESS,
        response: data,
    };
};
const siteDeleteFailed = (data) => {
    return {
        type: SITE.SITE_DELETE_V6_FAILED,
        response: data,
    };
};

const SiteDeleteActionV6 = {
    siteDelete,
    siteDeleteSuccess,
    siteDeleteFailed,
};
export default SiteDeleteActionV6;
