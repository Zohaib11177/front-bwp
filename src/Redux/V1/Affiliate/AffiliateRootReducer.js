import { combineReducers } from "redux";
import AffiliateClickReducer from "Redux/V1/Affiliate/AffiliateClick/AffiliateClickReducer";
import AffiliateStatsReducer from "Redux/V1/Affiliate/AffiliateStats/AffiliateStatsReducer";
import AffiliateWalletReducer from "Redux/V1/Affiliate/AffiliateWallet/AffiliateWalletReducer";
import AffProfileRootReducer from "Redux/V1/Affiliate/AffiliateProfile/AffProfileRootReducer";

const AffiliateRootReducer = combineReducers({
    click: AffiliateClickReducer,
    stats: AffiliateStatsReducer,
    wallet: AffiliateWalletReducer,
    affiliateProfile: AffProfileRootReducer,
});
export default AffiliateRootReducer;
