import { combineReducers } from "redux";
import SiteVersionReducerV6 from "Redux/V6/Sites/SiteVersion/Put/SitePutReducerV6";

const SiteVersionRootReducerV6 = combineReducers({
    update: SiteVersionReducerV6,
});

export default SiteVersionRootReducerV6;
