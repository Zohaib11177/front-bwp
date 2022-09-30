import { all } from "redux-saga/effects";
import SiteSubRootSagaV6 from "Redux/V6/Sites/Site/SiteRootSagaV6";
import BackupRootSagaV6 from "Redux/V6/Sites/Backups/BackupRootSagaV6";
import FeatureRootSagaV6 from "Redux/V6/Sites/Features/FeatureRootSagaV6";
import OperationRootSagaV6 from "Redux/V6/Sites/Operations/OperationRootSagaV6";
import WordpressRootSagaV6 from "Redux/V6/Sites/Wordpress/WordpressRootSagaV6";
import SiteListSagaV6 from "Redux/V6/Sites/SiteList/SiteListSagaV6";

import AddonRootSagaV6 from "Redux/V6/Sites/Addons/AddonRootSagaV6";
import DomainRootSagaV6 from "Redux/V6/Sites/Domain/DomainRootSagaV6";
export default function* SiteRootSagaV6() {
    yield all([
        SiteSubRootSagaV6(),
        BackupRootSagaV6(),
        FeatureRootSagaV6(),
        OperationRootSagaV6(),
        WordpressRootSagaV6(),
        SiteListSagaV6(),
        AddonRootSagaV6(),
        DomainRootSagaV6(),
    ]);
}
