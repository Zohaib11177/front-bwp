import SITE from "Redux/V2/Sites/Site/ActionTypeV2";

const SiteCostingReducerV2 = (
    state = {
        loading: false,
        site_costing: [],
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_COSTING_V2:
            return {
                ...state,
                success: false,
                loading: true,
                err_mess: null,
            };
        case SITE.SITE_COSTING_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                site_costing: action.response,
                success: false,
                err_mess: null,
            };
        case SITE.SITE_COSTING_FAILED_V2:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                site_costing: [],
                success: false,
            };
        default:
            return state;
    }
};

export default SiteCostingReducerV2;
