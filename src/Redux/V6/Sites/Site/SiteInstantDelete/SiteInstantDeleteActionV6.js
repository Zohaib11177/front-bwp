import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteInstantDelete = (data) => {
    return {
        type: SITE.SITE_INSTANT_DELETE_V6,
        request: data,
    };
};
const siteInstantDeleteSuccess = (data) => {
    return {
        type: SITE.SITE_INSTANT_DELETE_V6_SUCCESS,
        response: data,
    };
};
const siteInstantDeleteFailed = (data) => {
    return {
        type: SITE.SITE_INSTANT_DELETE_V6_FAILED,
        response: data,
    };
};

const SiteInstantDeleteActionV6 = {
    siteInstantDelete,
    siteInstantDeleteSuccess,
    siteInstantDeleteFailed,
};
export default SiteInstantDeleteActionV6;
