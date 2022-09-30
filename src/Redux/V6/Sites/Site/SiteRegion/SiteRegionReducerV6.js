import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteRegionReducerV6 = (
    state = {
        loading: false,
        success: false,
        region: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_REGION_V6:
            return {
                ...state,
                loading: true,
                success: false,
                region: [],
                err_mess: null,
            };
        case SITE.SITE_REGION_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                region: action.response.regions,
            };
        case SITE.SITE_REGION_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                region: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteRegionReducerV6;
