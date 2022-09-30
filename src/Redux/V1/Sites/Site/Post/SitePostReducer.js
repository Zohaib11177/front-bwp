import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteCreateReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
        site: [],
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_POST:
            return {
                ...state,
                loading: true,
                err_mess: null,
                site: [],
                success: false,
            };
        case SITE.SITE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                site: action.response.site,
                success: true,
                err_mess: null,
            };
        case SITE.SITE_POST_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                site: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};
export default SiteCreateReducer;
