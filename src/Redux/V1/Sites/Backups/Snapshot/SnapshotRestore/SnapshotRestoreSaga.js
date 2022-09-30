import { takeEvery, put } from "redux-saga/effects";

import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";
import SnapshotRestoreAction from "Redux/V1/Sites/Backups/Snapshot/SnapshotRestore/SnapshotRestoreAction";
import BackupService from "Services/V1/BackupService";
import ToastHelper from "Helpers/ToastHelper";

function* snapshotRestore(data) {
    try {
        ToastHelper.info();
        const response = yield BackupService.snapshotRestore(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                SnapshotRestoreAction.snapshotRestoreSuccess(response.data)
            );
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SnapshotRestoreAction.snapshotRestoreFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SnapshotRestoreSaga() {
    yield takeEvery(SNAPSHOT.SNAPSHOT_RESTORE, snapshotRestore);
}
