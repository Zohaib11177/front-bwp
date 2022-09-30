import { combineReducers } from "redux";
import AccessSharingReducerV6 from "Redux/V6/Sites/Features/AccessSharing/AccessSharingReducerV6";
import SiteDbLoginReducerV6 from "Redux/V6/Sites/Features/SiteDbLogin/SiteDbLoginReducerV6";
import SiteSftpReducerV6 from "Redux/V6/Sites/Features/SiteSftp/SiteSftpReducerV6";
import SiteCloneFormReducerV6 from "Redux/V6/Sites/Features/SiteCloneForm/SiteCloneFormReducerV6";

const FeatureRootReducerV6 = combineReducers({
    accessSharing: AccessSharingReducerV6,
    db_login: SiteDbLoginReducerV6,
    siteSftp: SiteSftpReducerV6,
    siteCloneForm: SiteCloneFormReducerV6,
});
export default FeatureRootReducerV6;
