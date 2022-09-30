import { combineReducers } from "redux";
import PhpLoginReducer from "Redux/V1/Sites/Features/PHPLogin/PhpLoginReducer";
import PluginResetReducer from "Redux/V1/Sites/Features/PluginReset/PluginResetReducer";
import WordpressLoginReducer from "Redux/V1/Sites/Features/WordpressLogin/WordpressLoginReducer";
import SiteCloneReducer from "Redux/V1/Sites/Features/SiteClone/SiteCloneReducer";
import SiteScreenshotReducer from "Redux/V1/Sites/Features/SiteScreenshot/SiteScreenshotReducer";
import AccessSharingReducer from "Redux/V1/Sites/Features/AccessSharing/AccessSharingReducer";
import SiteSftpReducer from "Redux/V1/Sites/Features/SiteSftp/SiteSftpReducer";
import RetestPageSpeedReducer from "Redux/V1/Sites/Features/RetestPageSpeed/RetestPageSpeedReducer";
import SiteCloneFormReducer from "Redux/V1/Sites/Features/SiteCloneForm/SiteCloneFormReducer";
const FeatureRootReducer = combineReducers({
    phpLogin: PhpLoginReducer,
    pluginReset: PluginResetReducer,
    wordpressLogin: WordpressLoginReducer,
    siteClone: SiteCloneReducer,
    siteCloneForm: SiteCloneFormReducer,
    siteScreenshot: SiteScreenshotReducer,
    accessSharing: AccessSharingReducer,
    siteSftp: SiteSftpReducer,
    retestPageSpeed: RetestPageSpeedReducer,
});
export default FeatureRootReducer;
