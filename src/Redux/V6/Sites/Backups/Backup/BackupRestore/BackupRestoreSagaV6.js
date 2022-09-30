import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";
import BackupRestoreActionV6 from "Redux/V6/Sites/Backups/Backup/BackupRestore/BackupRestoreActionV6";
import BackupListActionV6 from "Redux/V6/Sites/Backups/Backup/Get/BackupGetActionV6";
import BackupServiceV6 from "Services/V6/BackupServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* backupRestore(data) {
    console.log(data)
    try {
        ToastHelper.info();
        const response = yield BackupServiceV6.backupRestore(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            if (data.request.cp === "PA") {
                yield put(
                    BackupRestoreActionV6.backupRestoreSuccess(response.data)
                );
                // console.log(response.data.one_click.url,"JUIN22")
                // window.location.assign(response.data.one_click.url);
            } else {
                yield put(
                    BackupRestoreActionV6.backupRestoreSuccess(response.data)
                );
                yield put(BackupListActionV6.backupGet(data.request.host));
            }
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                BackupRestoreActionV6.backupRestoreFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        if (data.request.cp === "PA") {
            ToastHelper.info(
                "Your restore is still in process, please try to restore in few minutes"
            );
        } else {
            ToastHelper.error(
                "Right now we are facing some issue on backups, please contact support!."
            );
            yield put(BackupRestoreActionV6.backupRestoreFailed());
        }
    }
}

export function* BackupRestoreSagaV6() {
    yield takeEvery(BACKUP.BACKUP_RESTORE_V6, backupRestore);
}
