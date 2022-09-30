import SITE from "Redux/V1/Sites/Site/ActionType";

const sitePost = (data) => {
    return {
        type: SITE.SITE_POST,
        request: data,
    };
};

const sitePostSuccess = (data) => {
    return {
        type: SITE.SITE_POST_SUCCESS,
        response: data,
    };
};

const sitePostFailed = (data) => {
    return {
        type: SITE.SITE_POST_FAILED,
        response: data,
    };
};

const SiteCreateAction = {
    sitePost,
    sitePostSuccess,
    sitePostFailed,
};

export default SiteCreateAction;
