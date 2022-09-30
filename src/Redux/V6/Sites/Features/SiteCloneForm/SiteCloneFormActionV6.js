import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";

const siteClone = (data) => {
    return {
        type: FEATURE.SITE_CLONE_FORM_V6,
        request: data,
    };
};
const siteCloneSuccess = (data) => {
    return {
        type: FEATURE.SITE_CLONE_FORM_V6_SUCCESS,
        response: data,
    };
};

const siteCloneFailed = (data) => {
    return {
        type: FEATURE.SITE_CLONE_FORM_V6_FAILED,
        response: data,
    };
};

const SiteCloneFormActionV6 = {
    siteClone,
    siteCloneSuccess,
    siteCloneFailed,
};
export default SiteCloneFormActionV6;
