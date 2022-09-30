import SITE_V3 from "Redux/V3/Sites/SiteList/SiteListActionTypeV3";

const SiteListReducerV3 = (
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
        case SITE_V3.SITE_V3_GET:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
                pagination: [],
            };
        case SITE_V3.SITE_V3_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                site_list: action.response.sites,
                pagination: action.response.pagination,
            };
        case SITE_V3.SITE_V3_GET_FAILED:
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
export default SiteListReducerV3;
