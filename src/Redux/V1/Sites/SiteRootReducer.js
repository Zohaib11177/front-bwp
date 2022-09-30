import { combineReducers } from 'redux';
import OperationRootReducer from 'Redux/V1/Sites/Operations/OperationRootReducer';
import WordpressRootReducer from 'Redux/V1/Sites/Wordpress/WordpressRootReducer';
import BackupRootReducer from 'Redux/V1/Sites/Backups/BackupRootReducer';
import AddonRootReducer from 'Redux/V1/Sites/Addons/AddonRootReducer';
import FeatureRootReducer from 'Redux/V1/Sites/Features/FeatureRootReducer';
import UpTimeReportReducer from 'Redux/V1/Sites/UpTimeReport/UpTimeReportReducer';

import SiteSubRootReducer from 'Redux/V1/Sites/Site/SiteRootReducer';
const SiteRootReducer = combineReducers({
    operation: OperationRootReducer,
    wordpress: WordpressRootReducer,
    backup: BackupRootReducer,
    addon: AddonRootReducer,
    feature: FeatureRootReducer,
    site: SiteSubRootReducer,
    upTime: UpTimeReportReducer,
});
export default SiteRootReducer;
