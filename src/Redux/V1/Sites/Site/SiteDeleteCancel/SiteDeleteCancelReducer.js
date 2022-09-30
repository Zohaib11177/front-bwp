import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteDeleteCancelReducer = (
    state = {
        loading: false,
        success: false,
        site_delete_cancel: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_DELETE_CANCEL:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                site_delete_cancel: [],
            };
        case SITE.SITE_DELETE_CANCEL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                site_delete_cancel: action.response,
                err_mess: null,
            };
        case SITE.SITE_DELETE_CANCEL_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                site_delete_cancel: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteDeleteCancelReducer;
