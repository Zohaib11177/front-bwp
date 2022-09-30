import { all } from "redux-saga/effects";
import { PhpLoginSaga } from "Redux/V1/Sites/Features/PHPLogin/PhpLoginSaga";
import { PluginResetSaga } from "Redux/V1/Sites/Features/PluginReset/PluginResetSaga";
import { WordpressLoginSaga } from "Redux/V1/Sites/Features/WordpressLogin/WordpressLoginSaga";
import { SiteCloneSaga } from "Redux/V1/Sites/Features/SiteClone/SiteCloneSaga";
import { SiteScreenshotSaga } from "Redux/V1/Sites/Features/SiteScreenshot/SiteScreenshotSaga";
import { AccessSharingSaga } from "Redux/V1/Sites/Features/AccessSharing/AccessSharingSaga";
import { SiteSftpSaga } from "Redux/V1/Sites/Features/SiteSftp/SiteSftpSaga";
import { RetestPageSpeedSaga } from "Redux/V1/Sites/Features/RetestPageSpeed/RetestPageSpeedSaga";
import { SiteCloneFormSaga } from "Redux/V1/Sites/Features/SiteCloneForm/SiteCloneFormSaga";

export default function* FeatureRootSaga() {
    yield all([
        PhpLoginSaga(),
        PluginResetSaga(),
        WordpressLoginSaga(),
        SiteCloneSaga(),
        SiteCloneFormSaga(),
        SiteScreenshotSaga(),
        AccessSharingSaga(),
        SiteSftpSaga(),
        RetestPageSpeedSaga(),
    ]);
}
