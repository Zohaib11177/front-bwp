import { combineReducers } from "redux";
import WordpressLoginReducerV3 from "Redux/V3/Sites/Features/WordpressLogin/WordpressLoginReducerV3";

const FeatureRootReducerV3 = combineReducers({
    wordpressLoginV3: WordpressLoginReducerV3,
});
export default FeatureRootReducerV3;
