import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const sitePost = (data) => {
    return {
        type: SITE.SITE_POST_V6,
        request: data,
    };
};

const sitePostSuccess = (data) => {
    return {
        type: SITE.SITE_POST_SUCCESS_V6,
        response: data,
    };
};

const sitePostFailed = (data) => {
    return {
        type: SITE.SITE_POST_FAILED_V6,
        response: data,
    };
};

const SiteCreateActionV6 = {
    sitePost,
    sitePostSuccess,
    sitePostFailed,
};

export default SiteCreateActionV6;
