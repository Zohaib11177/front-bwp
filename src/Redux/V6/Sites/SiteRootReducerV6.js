import { combineReducers } from "redux";
import SiteSubRootReducerV6 from "Redux/V6/Sites/Site/SiteRootReducerV6";
import BackupRootReducerV6 from "Redux/V6/Sites/Backups/BackupRootReducerV6";
import FeatureRootReducerV6 from "Redux/V6/Sites/Features/FeatureRootReducerV6";
import OperationRootReducerV6 from "Redux/V6/Sites/Operations/OperationRootReducerV6";
import WordpressRootReducerV6 from "Redux/V6/Sites/Wordpress/WordpressRootReducerV6";
import SiteListReducerV6 from "Redux/V6/Sites/SiteList/SiteListReducerV6";

import AddonRootReducerV6 from "Redux/V6/Sites/Addons/AddonRootReducerV6";
import DomainRootReducerV6 from "Redux/V6/Sites/Domain/DomainRootReducerV6";
const SiteRootReducerV6 = combineReducers({
    siteV6: SiteSubRootReducerV6,
    backupV6: BackupRootReducerV6,
    featureV6: FeatureRootReducerV6,
    operationV6: OperationRootReducerV6,
    wordpressV6: WordpressRootReducerV6,
    sitelistV6: SiteListReducerV6,
    addonV6: AddonRootReducerV6,
    domainV6: DomainRootReducerV6,
});
export default SiteRootReducerV6;
