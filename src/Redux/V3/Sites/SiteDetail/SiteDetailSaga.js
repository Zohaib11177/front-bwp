import DETAIL from 'Redux/V3/Sites/SiteDetail/SiteDetailActionType';
import { takeEvery } from 'redux-saga/effects';
import {
    siteDetailFailed,
    siteDetailSuccess,
} from 'Redux/V3/Sites/SiteDetail/SiteDetailAction';
import { put } from 'redux-saga/effects';
import SiteDetailService from 'Services/V3/SiteDetailService';
import BackupListAction from 'Redux/V1/Sites/Backups/Backup/Get/BackupGetAction';

function* siteDetail(data) {
    try {
        console.log(data);
        const response = yield SiteDetailService.getSiteDetail(
            data.payload.host
        );
        if (response.success) {
            yield put(siteDetailSuccess(response.data.site));
            yield put(
                BackupListAction.backupGet(
                    response.data.site.container.identity
                )
            );
        } else {
            yield put(siteDetailFailed());
        }
    } catch (error) {}
}

export default function* SiteDetailSagaV3() {
    yield takeEvery(DETAIL.SITE_DETAIL, siteDetail);
}
