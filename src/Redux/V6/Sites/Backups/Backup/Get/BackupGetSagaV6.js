import { takeEvery, put } from "redux-saga/effects";
import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";
import BackupListActionV6 from "Redux/V6/Sites/Backups/Backup/Get/BackupGetActionV6";
import BackupServiceV6 from "Services/V6/BackupServiceV6";

function* backupGet(data) {
    try {
        const response = yield BackupServiceV6.backupGet(data.request);
        if (response.success) {
            yield put(BackupListActionV6.backupGetSuccess(response.data));
        } else {
            yield put(
                BackupListActionV6.backupGetFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* BackupListSagaV6() {
    yield takeEvery(BACKUP.BACKUP_GET_V6, backupGet);
}
