import { combineReducers } from "redux";
import SitePSGetReducerV6 from "Redux/V6/Sites/SitePortalSettings/Get/SiteGetReducerV6";

const SitePSRootReducerV6 = combineReducers({
    list : SitePSGetReducerV6,
});

export default SitePSRootReducerV6;
