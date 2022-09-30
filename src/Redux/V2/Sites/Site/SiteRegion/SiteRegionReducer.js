import SITE from "Redux/V2/Sites/Site/ActionTypeV2";

const SiteRegionReducer = (
    state = {
        loading: false,
        success: false,
        region: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_REGION_V2:
            return {
                ...state,
                loading: true,
                success: false,
                region: [],
                err_mess: null,
            };
        case SITE.SITE_REGION_V2_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                region: action.response.regions,
            };
        case SITE.SITE_REGION_V2_FAILED:
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

export default SiteRegionReducer;
