import { combineReducers } from "redux";
import SiteCostingReducerV2 from "Redux/V2/Sites/Site/SiteCosting/SiteCostingReducerV2";
import SiteDeleteReducerV2 from "Redux/V2/Sites/Site/Delete/SiteDeleteReducerV2";
import RegionReducerV2 from "Redux/V2/Sites/Site/SiteRegion/SiteRegionReducer";

const SiteSubRootReducerV2 = combineReducers({
    siteCostingV2: SiteCostingReducerV2,
    deleteV2: SiteDeleteReducerV2,
    regionV2: RegionReducerV2,
});
export default SiteSubRootReducerV2;
