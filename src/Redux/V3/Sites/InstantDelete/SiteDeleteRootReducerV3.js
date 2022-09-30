import { combineReducers } from "redux";
import InstantDeleteReducerV3 from "Redux/V3/Sites/InstantDelete/Delete/SiteDeleteReducerV3";
const SiteDeleteRootReducerV3 = combineReducers({
    instantDelete: InstantDeleteReducerV3,
});
export default SiteDeleteRootReducerV3;
