import AFFILIATE from "Redux/V1/Affiliate/ActionType";

const affiliateClick = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_CLICK,
        request: data,
    };
};
const affiliateClickSuccess = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_CLICK_SUCCESS,
        response: data,
    };
};
const affiliateClickFailed = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_CLICK_FAILED,
        response: data,
    };
};
const AffiliateClickAction = {
    affiliateClick,
    affiliateClickSuccess,
    affiliateClickFailed,
};
export default AffiliateClickAction;
