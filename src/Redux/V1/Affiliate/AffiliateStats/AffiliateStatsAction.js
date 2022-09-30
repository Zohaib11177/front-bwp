import AFFILIATE from "Redux/V1/Affiliate/ActionType";

const affiliateStats = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_STATS,
        request: data,
    };
};
const affiliateStatsSuccess = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_STATS_SUCCESS,
        response: data,
    };
};
const affiliateStatsFailed = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_STATS_FAILED,
        response: data,
    };
};
const AffiliateStatsAction = {
    affiliateStats,
    affiliateStatsSuccess,
    affiliateStatsFailed,
};
export default AffiliateStatsAction;
