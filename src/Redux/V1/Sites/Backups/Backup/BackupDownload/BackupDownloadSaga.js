import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";
import BackupDownloadAction from "Redux/V1/Sites/Backups/Backup/BackupDownload/BackupDownloadAction";
import BackupService from "Services/V1/BackupService";

function* backupDownload(data) {
    try {
        const response = yield BackupService.backupDownload(data.request);
        if (response.success) {
            yield put(
                BackupDownloadAction.backupDownloadSuccess(response.data)
            );
            window.open(response.data.backup.link, "_blank");
        } else {
            yield put(
                BackupDownloadAction.backupDownloadFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* BackupDownloadSaga() {
    yield takeEvery(BACKUP.BACKUP_DOWNLOAD, backupDownload);
}
