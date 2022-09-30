import { combineReducers } from "redux";
import AccessSharingReducerV2 from "Redux/V2/Sites/Features/AccessSharing/AccessSharingReducerV2";

const FeatureRootReducerV2 = combineReducers({
    accessSharingV2: AccessSharingReducerV2,
});
export default FeatureRootReducerV2;
