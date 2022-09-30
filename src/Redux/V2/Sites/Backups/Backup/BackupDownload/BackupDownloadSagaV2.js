import { takeEvery, put } from 'redux-saga/effects';
import BACKUP from 'Redux/V2/Sites/Backups/Backup/ActionTypeV2';
import BackupDownloadActionV2 from 'Redux/V2/Sites/Backups/Backup/BackupDownload/BackupDownloadActionV2';
import BackupListAction from 'Redux/V1/Sites/Backups/Backup/Get/BackupGetAction';
import BackupServiceV2 from 'Services/V2/BackupServiceV2';
import ToastHelper from 'Helpers/ToastHelper';

function* backupDownload(data) {
    try {
        ToastHelper.info();
        const response = yield BackupServiceV2.backupDownload(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            if (data.request.cp === 'PA') {
                window.location.assign(response.data.one_click.url);
            } else {
                yield put(
                    BackupDownloadActionV2.backupDownloadSuccess(response.data)
                );
                yield put(BackupListAction.backupGet(data.request.identity));
            }
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                BackupDownloadActionV2.backupDownloadFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        if (data.request.cp === 'PA') {
            ToastHelper.info(
                'Your download is still in process, please try to download in few minutes'
            );
        } else {
            ToastHelper.error(
                'Right now we are facing some issue on backups, please contact support!.'
            );
            yield put(BackupDownloadActionV2.backupDownloadFailed());
        }
    }
}

export function* BackupDownloadSagaV2() {
    yield takeEvery(BACKUP.BACKUP_DOWNLOAD_V2, backupDownload);
}
