import FEATURE from "Redux/V1/Sites/Features/ActionType";
const SiteCloneFormReducer = (
    state = {
        loading: false,
        success: false,
        clone: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.SITE_CLONE_FORM:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                clone: {},
            };
        case FEATURE.SITE_CLONE_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                clone: action.response,
                success: true,
                err_mess: null,
            };
        case FEATURE.SITE_CLONE_FORM_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                clone: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteCloneFormReducer;
