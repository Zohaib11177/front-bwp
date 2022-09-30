import { all } from "redux-saga/effects";
import AddonRootSagaV2 from "Redux/V2/Sites/Addons/AddonRootSagaV2";
import BackupRootSagaV2 from "Redux/V2/Sites/Backups/BackupRootSaga2";
import SiteSubRootSagaV2 from "Redux/V2/Sites/Site/SiteRootSagaV2";
import FeatureRootSagaV2 from "Redux/V2/Sites/Features/FeatureRootSagaV2";
import OperationRootSagaV2 from "Redux/V2/Sites/Operations/OperationRootSaga";

export default function* SiteRootSagaV2() {
    yield all([
        BackupRootSagaV2(),
        AddonRootSagaV2(),
        SiteSubRootSagaV2(),
        FeatureRootSagaV2(),
        OperationRootSagaV2(),
    ]);
}
