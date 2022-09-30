import FEATURE from "Redux/V1/Sites/Features/ActionType";

const siteClone = (data) => {
    return {
        type: FEATURE.SITE_CLONE,
        request: data,
    };
};
const siteCloneSuccess = (data) => {
    return {
        type: FEATURE.SITE_CLONE_SUCCESS,
        response: data,
    };
};

const siteCloneFailed = (data) => {
    return {
        type: FEATURE.SITE_CLONE_FAILED,
        response: data,
    };
};

const SiteCloneAction = {
    siteClone,
    siteCloneSuccess,
    siteCloneFailed,
};
export default SiteCloneAction;
