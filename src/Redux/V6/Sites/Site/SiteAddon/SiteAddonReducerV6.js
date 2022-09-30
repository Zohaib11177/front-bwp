import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteAddonReducerV6 = (
    state = {
        loading: false,
        products: [],
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_ADDON_V6:
            return {
                ...state,
                loading: true,
                products: [],
                success: false,
                err_mess: null,
            };
        case SITE.SITE_ADDON_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.response.products,
                err_mess: null,
                success: true,
            };
        case SITE.SITE_ADDON_V6_FAILED:
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

export default SiteAddonReducerV6;
