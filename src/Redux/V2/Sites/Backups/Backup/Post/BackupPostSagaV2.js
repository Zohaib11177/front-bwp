import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";
import BackupCreateActionV2 from "Redux/V2/Sites/Backups/Backup/Post/BackupPostActionV2";
import BackupListAction from "Redux/V1/Sites/Backups/Backup/Get/BackupGetAction";
import BackupServiceV2 from "Services/V2/BackupServiceV2";
import ToastHelper from "Helpers/ToastHelper";

function* backupPost(data) {
    try {
        ToastHelper.info();
        const response = yield BackupServiceV2.backupPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(BackupCreateActionV2.backupPostSuccess(response.data));
            yield put(BackupListAction.backupGet(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                BackupCreateActionV2.backupPostFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(BackupCreateActionV2.backupPostFailed());
    }
}

export function* BackupCreateSagaV2() {
    yield takeEvery(BACKUP.BACKUP_POST_V2, backupPost);
}
