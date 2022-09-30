import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";
const SiteCloneFormReducerV6 = (
    state = {
        loading: false,
        success: false,
        clone: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.SITE_CLONE_FORM_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                clone: {},
            };
        case FEATURE.SITE_CLONE_FORM_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                clone: action.response,
                success: true,
                err_mess: null,
            };
        case FEATURE.SITE_CLONE_FORM_V6_FAILED:
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

export default SiteCloneFormReducerV6;
