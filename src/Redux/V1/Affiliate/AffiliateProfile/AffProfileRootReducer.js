import { combineReducers } from "redux";
import AffProfileUpdateReducer from "Redux/V1/Affiliate/AffiliateProfile/Put/AffProfilePutReducer";

const AffProfileRootReducer = combineReducers({
    profileUpdate: AffProfileUpdateReducer,
});
export default AffProfileRootReducer;
