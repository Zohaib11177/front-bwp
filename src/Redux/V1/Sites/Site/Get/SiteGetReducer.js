import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteListReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
        site_list: [],
        pagination: [],
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_GET:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
                pagination: [],
            };
        case SITE.SITE_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                site_list: action.response.sites,
                pagination: action.response.pagination,
            };
        case SITE.SITE_GET_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                err_mess: action.response,
                site_list: [],
                pagination: [],
            };
        default:
            return state;
    }
};
export default SiteListReducer;
