import { combineReducers } from "redux";
import AddonRootReducerV2 from "Redux/V2/Sites/Addons/AddonRootReducerV2";
import BackupRootReducerV2 from "Redux/V2/Sites/Backups/BackupRootReducer2";
import SiteSubRootReducerV2 from "Redux/V2/Sites/Site/SiteRootReducerV2";
import FeatureRootReducerV2 from "Redux/V2/Sites/Features/AccessSharing/AccessSharingReducerV2";
import OperationRootReducerV2 from "Redux/V2/Sites/Operations/OperationRootReducer";

const SiteRootReducerV2 = combineReducers({
    backupV2: BackupRootReducerV2,
    addonV2: AddonRootReducerV2,
    siteV2: SiteSubRootReducerV2,
    featureV2: FeatureRootReducerV2,
    operationV2: OperationRootReducerV2,
});
export default SiteRootReducerV2;
