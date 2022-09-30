import { all } from "redux-saga/effects";
import { AccessSharingSagaV6 } from "Redux/V6/Sites/Features/AccessSharing/AccessSharingSagaV6";
import { SiteDbLoginSagaV6 } from "Redux/V6/Sites/Features/SiteDbLogin/SiteDbLoginSagaV6";
import { SiteSftpSagaV6 } from "Redux/V6/Sites/Features/SiteSftp/SiteSftpSagaV6";
import { SiteCloneFormSagaV6 } from "Redux/V6/Sites/Features/SiteCloneForm/SiteCloneFormSagaV6";

export default function* FeatureRootSagaV6() {
    yield all([
        AccessSharingSagaV6(),
        SiteDbLoginSagaV6(),
        SiteSftpSagaV6(),
        SiteCloneFormSagaV6(),
    ]);
}
