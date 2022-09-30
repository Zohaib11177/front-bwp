import AFFILIATE from "Redux/V1/Affiliate/ActionType";

const AffiliateStatsReducer = (
    state = {
        loading: false,
        stats: [],
        err_mess: null,
        success: false,
    },
    action
) => {
    switch (action.type) {
        case AFFILIATE.AFFILIATE_STATS:
            return {
                ...state,
                loading: true,
                err_mess: null,
                stats: [],
                success: false,
            };
        case AFFILIATE.AFFILIATE_STATS_SUCCESS:
            return {
                ...state,
                loading: false,
                stats: action.response.affiliate_stats,
                err_mess: null,
                success: true,
            };
        case AFFILIATE.AFFILIATE_STATS_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                stats: [],
                success: false,
            };
        default:
            return state;
    }
};

export default AffiliateStatsReducer;
