import { combineReducers } from "redux";
import CdnEnableReducerV2 from "Redux/V2/Sites/Addons/Cdn/CdnEnable/CdnEnableReducerV2";
import CdnDisableReducerV2 from "Redux/V2/Sites/Addons/Cdn/CdnDisable/CdnDisableReducerV2";
import CdnUpdateReducerV2 from "Redux/V2/Sites/Addons/Cdn/Put/CdnPutReducerV2";

const AddonRootReducerV2 = combineReducers({
    cdnEnable: CdnEnableReducerV2,
    cdnDisable: CdnDisableReducerV2,
    cdnUpdate: CdnUpdateReducerV2,
});
export default AddonRootReducerV2;
