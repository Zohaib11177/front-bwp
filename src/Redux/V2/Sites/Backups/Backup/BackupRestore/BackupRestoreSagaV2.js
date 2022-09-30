import { takeEvery, put } from "redux-saga/effects";

import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";
import BackupRestoreActionV2 from "Redux/V2/Sites/Backups/Backup/BackupRestore/BackupRestoreActionV2";
import BackupServiceV2 from "Services/V2/BackupServiceV2";
import ToastHelper from "Helpers/ToastHelper";

function* backupRestore(data) {
    try {
        ToastHelper.info();
        const response = yield BackupServiceV2.backupRestore(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                BackupRestoreActionV2.backupRestoreSuccess(response.data)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                BackupRestoreActionV2.backupRestoreFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(BackupRestoreActionV2.backupRestoreFailed());
    }
}

export function* BackupRestoreSagaV2() {
    yield takeEvery(BACKUP.BACKUP_RESTORE_V2, backupRestore);
}
