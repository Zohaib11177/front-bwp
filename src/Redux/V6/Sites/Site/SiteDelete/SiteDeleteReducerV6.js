import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteDeleteReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_DELETE_V6:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case SITE.SITE_DELETE_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
            };
        case SITE.SITE_DELETE_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteDeleteReducerV6;
