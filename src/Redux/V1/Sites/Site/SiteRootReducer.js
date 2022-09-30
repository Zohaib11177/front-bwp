import { combineReducers } from "redux";
import SiteListReducer from "Redux/V1/Sites/Site/Get/SiteGetReducer";
import SiteCreateReducer from "Redux/V1/Sites/Site/Post/SitePostReducer";
import SiteDeleteReducer from "Redux/V1/Sites/Site/Delete/SiteDeleteReducer";
import SiteDeleteCancelReducer from "Redux/V1/Sites/Site/SiteDeleteCancel/SiteDeleteCancelReducer";
import SiteRegionReducer from "Redux/V1/Sites/Site/SiteRegion/SiteRegionReducer";
import SiteIdentityReducer from "Redux/V1/Sites/Site/SiteIdentity/SiteIdentityReducer";
import SiteDatabaseReducer from "Redux/V1/Sites/Site/SiteDatabase/SiteDatabaseReducer";
import SiteCostingReducer from "Redux/V1/Sites/Site/SiteCosting/SiteCostingReducer";
import SiteAddonReducer from "Redux/V1/Sites/Site/SiteAddon/SiteAddonReducer";
import SiteCloudProviderListReducer from "Redux/V1/Sites/Site/SiteCloudProvider/SiteCloudProviderReducer";

const SiteSubRootReducer = combineReducers({
    list: SiteListReducer,
    create: SiteCreateReducer,
    delete: SiteDeleteReducer,
    deleteCancel: SiteDeleteCancelReducer,
    siteRegion: SiteRegionReducer,
    siteIdentity: SiteIdentityReducer,
    siteDatabase: SiteDatabaseReducer,
    siteCosting: SiteCostingReducer,
    siteAddon: SiteAddonReducer,
    siteCloudProvider: SiteCloudProviderListReducer,
});
export default SiteSubRootReducer;
