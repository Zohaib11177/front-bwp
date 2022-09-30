import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";
import BackupRestoreAction from "Redux/V1/Sites/Backups/Backup/Restore/BackupRestoreAction";
import BackupService from "Services/V1/BackupService";
import ToastHelper from "Helpers/ToastHelper";

function* backupRestore(data) {
    try {
        ToastHelper.info();
        const response = yield BackupService.backupRestore(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(BackupRestoreAction.backupRestoreSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                BackupRestoreAction.backupRestoreFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
    }
}

export function* BackupRestoreSaga() {
    yield takeEvery(BACKUP.BACKUP_RESTORE, backupRestore);
}
