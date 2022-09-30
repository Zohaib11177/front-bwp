import { combineReducers } from "redux";
import CdnDetailReducer from "Redux/V1/Sites/Addons/Cdn/First/CdnFirstReducer";
import CdnCacheReducer from "Redux/V1/Sites/Addons/Cdn/CdnCache/CdnCacheReducer";
import NitroDetailReducer from "Redux/V1/Sites/Addons/Nitro/First/NitroFirstReducer";
import NitroEnableReducer from "Redux/V1/Sites/Addons/Nitro/NitroEnable/NitroEnableReducer";
import NitroDisableReducer from "Redux/V1/Sites/Addons/Nitro/NitroDisable/NitroDisableReducer";
import AddonListReducer from "Redux/V1/Sites/Addons/Get/AddonGetReducer";
import AddonToggleReducer from "Redux/V1/Sites/Addons/AddonToggle/AddonToggleReducer";
const AddonRootReducer = combineReducers({
    cdnDetail: CdnDetailReducer,
    cdnCache: CdnCacheReducer,
    nitroDetail: NitroDetailReducer,
    nitroEnable: NitroEnableReducer,
    nitroDisable: NitroDisableReducer,
    list: AddonListReducer,
    toggle: AddonToggleReducer,
});
export default AddonRootReducer;
