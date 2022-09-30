import { combineReducers } from "redux";
import FeatureRootReducerV3 from "Redux/V3/Sites/Features/FeatureRootReducerV3";
import SiteDetailReducerV3 from "Redux/V3/Sites/SiteDetail/SiteDetailReducer";
import SiteListReducerV3 from "Redux/V3/Sites/SiteList/SiteListReducerV3";
import SiteDeleteRootReducerV3 from "Redux/V3/Sites/InstantDelete/SiteDeleteRootReducerV3";


const SiteRootReducerV3 = combineReducers({
    featureV3: FeatureRootReducerV3,
    sitedetailV3: SiteDetailReducerV3,
    sitelistV3: SiteListReducerV3,
    instantDeleteV3: SiteDeleteRootReducerV3,
})


export default SiteRootReducerV3;
