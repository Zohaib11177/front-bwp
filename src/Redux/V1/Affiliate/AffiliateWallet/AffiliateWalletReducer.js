import AFFILIATE from "Redux/V1/Affiliate/ActionType";

const AffiliateWalletReducer = (
    state = {
        loading: false,
        err_mess: null,
        wallet: {},
        success: false,
    },
    action
) => {
    switch (action.type) {
        case AFFILIATE.AFFILIATE_WALLET:
            return {
                ...state,
                loading: true,
                err_mess: null,
                wallet: {},
                success: false,
            };
        case AFFILIATE.AFFILIATE_WALLET_SUCCESS:
            return {
                ...state,
                loading: false,
                wallet: action.response.affiliate_wallet,
                err_mess: null,
                success: true,
            };
        case AFFILIATE.AFFILIATE_WALLET_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                wallet: {},
                success: false,
            };
        default:
            return state;
    }
};

export default AffiliateWalletReducer;
