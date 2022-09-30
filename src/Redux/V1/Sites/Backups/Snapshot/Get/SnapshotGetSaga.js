import { takeEvery, put } from "redux-saga/effects";
import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";
import SnapshotListAction from "Redux/V1/Sites/Backups/Snapshot/Get/SnapshotGetAction";
import BackupService from "Services/V1/BackupService";
function* snapshotGet(data) {
    try {
        const response = yield BackupService.snapshotGet(data.request);
        if (response.success) {
            yield put(SnapshotListAction.snapshotGetSuccess(response.data));
        } else {
            yield put(
                SnapshotListAction.snapshotGetFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SnapshotListSaga() {
    yield takeEvery(SNAPSHOT.SNAPSHOT_GET, snapshotGet);
}
