import AFFILIATE from "Redux/V1/Affiliate/ActionType";

const AffiliateClickReducer = (
    state = {
        loading: false,
        clicks: [],
        success: false,
        err_mess: null,
        pagination: [],
    },
    action
) => {
    switch (action.type) {
        case AFFILIATE.AFFILIATE_CLICK:
            return {
                ...state,
                loading: true,
                err_mess: null,
                clicks: [],
                success: false,
                pagination: [],
            };
        case AFFILIATE.AFFILIATE_CLICK_SUCCESS:
            return {
                ...state,
                loading: false,
                clicks: action.response.clicks,
                err_mess: null,
                success: false,
                pagination: action.response.pagination,
            };
        case AFFILIATE.AFFILIATE_CLICK_FAILED:
            return {
                ...state,
                loading: false,
                clicks: [],
                success: false,
                err_mess: action.response,
                pagination: [],
            };
        default:
            return state;
    }
};

export default AffiliateClickReducer;
