import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteCreateReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
        site: [],
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_POST_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
                site: [],
                success: false,
            };
        case SITE.SITE_POST_SUCCESS_V6:
            return {
                ...state,
                loading: false,
                site: action.response.site,
                success: true,
                err_mess: null,
            };
        case SITE.SITE_POST_FAILED_V6:
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
export default SiteCreateReducerV6;
