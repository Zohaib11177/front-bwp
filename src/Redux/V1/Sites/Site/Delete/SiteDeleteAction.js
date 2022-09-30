import SITE from "Redux/V1/Sites/Site/ActionType";

const siteDelete = (data) => {
    return {
        type: SITE.SITE_DELETE,
        request: data,
    };
};
const siteDeleteSuccess = (data) => {
    return {
        type: SITE.SITE_DELETE_SUCCESS,
        response: data,
    };
};
const siteDeleteFailed = (data) => {
    return {
        type: SITE.SITE_DELETE_FAILED,
        response: data,
    };
};

const SiteDeleteAction = {
    siteDelete,
    siteDeleteSuccess,
    siteDeleteFailed,
};

export default SiteDeleteAction;
