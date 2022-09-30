import FEATURE from "Redux/V1/Sites/Features/ActionType";

const siteClone = (data) => {
    return {
        type: FEATURE.SITE_CLONE_FORM,
        request: data,
    };
};
const siteCloneSuccess = (data) => {
    return {
        type: FEATURE.SITE_CLONE_FORM_SUCCESS,
        response: data,
    };
};

const siteCloneFailed = (data) => {
    return {
        type: FEATURE.SITE_CLONE_FORM_FAILED,
        response: data,
    };
};

const SiteCloneFormAction = {
    siteClone,
    siteCloneSuccess,
    siteCloneFailed,
};
export default SiteCloneFormAction;
