import SITE from "Redux/V2/Sites/Site/ActionTypeV2";

const SiteDeleteReducerV2 = (
    state = {
        loading: false,
        success: false,
        site_delete: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_DELETE_V2:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                site_delete: [],
            };
        case SITE.SITE_DELETE_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                site_delete: action.response,
            };
        case SITE.SITE_DELETE_FAILED_V2:
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
export default SiteDeleteReducerV2;
