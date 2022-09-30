import SITE_V6 from "Redux/V6/Sites/SiteList/SiteListActionTypeV6";

const SiteListReducerV6 = (
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
        case SITE_V6.SITE_V6_GET:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
                pagination: [],
            };
        case SITE_V6.SITE_V6_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                site_list: action.response.sites,
                pagination: action.response.pagination,
            };
        case SITE_V6.SITE_V6_GET_FAILED:
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
export default SiteListReducerV6;
