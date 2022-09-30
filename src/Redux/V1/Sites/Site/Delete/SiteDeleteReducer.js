import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteDeleteReducer = (
    state = {
        loading: false,
        success: false,
        site_delete: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_DELETE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                site_delete: [],
            };
        case SITE.SITE_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                site_delete: action.response,
            };
        case SITE.SITE_DELETE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                site_delete: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};
export default SiteDeleteReducer;
