import { all } from 'redux-saga/effects';
import OperationRootSaga from 'Redux/V1/Sites/Operations/OperationRootSaga';
import WordpressRootSaga from 'Redux/V1/Sites/Wordpress/WordpressRootSaga';
import BackupRootSaga from 'Redux/V1/Sites/Backups/BackupRootSaga';
import AddonRootSaga from 'Redux/V1/Sites/Addons/AddonRootSaga';
import FeatureRootSaga from 'Redux/V1/Sites/Features/FeatureRootSaga';
import SiteSubRootSaga from 'Redux/V1/Sites/Site/SiteRootSaga';
import { upTImeReportSaga } from 'Redux/V1/Sites/UpTimeReport/UpTimeReportSaga';

export default function* SiteRootSaga() {
    yield all([
        OperationRootSaga(),
        WordpressRootSaga(),
        BackupRootSaga(),
        AddonRootSaga(),
        FeatureRootSaga(),
        SiteSubRootSaga(),
        upTImeReportSaga(),
    ]);
}
