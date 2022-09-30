import AFFILIATE from "Redux/V1/Affiliate/ActionType";

const affiliateWallet = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_WALLET,
        request: data,
    };
};
const affiliateWalletSuccess = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_WALLET_SUCCESS,
        response: data,
    };
};
const affiliateWalletFailed = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_WALLET_FAILED,
        response: data,
    };
};
const AffiliateWalletAction = {
    affiliateWallet,
    affiliateWalletSuccess,
    affiliateWalletFailed,
};
export default AffiliateWalletAction;
