import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteIdentityReducer = (
    state = {
        loading: false,
        success: false,
        identity: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_IDENTITY:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                identity: {},
            };
        case SITE.SITE_IDENTITY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                identity: action.response.container,
                err_mess: null,
            };
        case SITE.SITE_IDENTITY_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                identity: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteIdentityReducer;
