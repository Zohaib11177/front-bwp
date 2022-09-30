import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteAddonReducer = (
    state = {
        loading: false,
        products: [],
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_ADDON:
            return {
                ...state,
                loading: true,
                products: [],
                success: false,
                err_mess: null,
            };
        case SITE.SITE_ADDON_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.response.products,
                err_mess: null,
                success: true,
            };
        case SITE.SITE_ADDON_FAILED:
            return {
                ...state,
                loading: false,
                products: [],
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteAddonReducer;
