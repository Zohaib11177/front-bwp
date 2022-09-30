import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";
import BackupCreateAction from "Redux/V1/Sites/Backups/Backup/Post/BackupPostAction";
import BackupListAction from "Redux/V1/Sites/Backups/Backup/Get/BackupGetAction";
import BackupService from "Services/V1/BackupService";
import ToastHelper from "Helpers/ToastHelper";

function* backupPost(data) {
    try {
        ToastHelper.info();
        console.log("backup post saga")
        const response = yield BackupService.backupPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(BackupListAction.backupGet(data.request));
            yield put(BackupCreateAction.backupPostSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                BackupCreateAction.backupPostFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
    }
}

export function* BackupCreateSaga() {
    yield takeEvery(BACKUP.BACKUP_POST, backupPost);
}
