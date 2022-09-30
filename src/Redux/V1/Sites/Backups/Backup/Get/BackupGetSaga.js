import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";
import BackupListAction from "Redux/V1/Sites/Backups/Backup/Get/BackupGetAction";
import BackupService from "Services/V1/BackupService";

function* backupGet(data) {
    try {
        const response = yield BackupService.backupGet(data.request);
        if (response.success) {
            yield put(BackupListAction.backupGetSuccess(response.data));
        } else {
            yield put(BackupListAction.backupGetFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* BackupListSaga() {
    yield takeEvery(BACKUP.BACKUP_GET, backupGet);
}
