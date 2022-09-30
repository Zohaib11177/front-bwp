import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";
import BackupDownloadActionV6 from "Redux/V6/Sites/Backups/Backup/BackupDownload/BackupDownloadActionV6";
import BackupListActionV6 from "Redux/V6/Sites/Backups/Backup/Get/BackupGetActionV6";
import BackupServiceV6 from "Services/V6/BackupServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* backupDownload(data) {
    console.log(data)
    try {
        ToastHelper.info();
        const response = yield BackupServiceV6.backupDownload(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            if (data.request.cp === "PA") {
                yield put(
                    BackupDownloadActionV6.backupDownloadSuccess(response.data)
                );
                window.location.assign(response.data.one_click.url);
            } else {
                yield put(
                    BackupDownloadActionV6.backupDownloadSuccess(response.data)
                );
                yield put(BackupListActionV6.backupGet(data.request.host));
            }
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                BackupDownloadActionV6.backupDownloadFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        if (data.request.cp === "PA") {
            ToastHelper.info(
                "Your download is still in process, please try to download in few minutes"
            );
        } else {
            ToastHelper.error(
                "Right now we are facing some issue on backups, please contact support!."
            );
            yield put(BackupDownloadActionV6.backupDownloadFailed());
        }
    }
}

export function* BackupDownloadSagaV6() {
    yield takeEvery(BACKUP.BACKUP_DOWNLOAD_V6, backupDownload);
}
