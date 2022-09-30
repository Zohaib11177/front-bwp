import { takeEvery, put } from "redux-saga/effects";
import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";
import SnapshotCreateAction from "Redux/V1/Sites/Backups/Snapshot/Post/SnapshotPostAction";
import SnapshotListAction from "Redux/V1/Sites/Backups/Snapshot/Get/SnapshotGetAction";
import BackupService from "Services/V1/BackupService";
import ToastHelper from "Helpers/ToastHelper";
import SiteBackupsBusiness from "Businesses/SiteDetails/SiteBackupsBusiness";

function* snapshotPost(data) {
    try {
        ToastHelper.info();
        const response = yield BackupService.snapshotPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SnapshotListAction.snapshotGet(data.request));
            yield put(SnapshotCreateAction.snapshotPostSuccess(response.data));
           
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SnapshotCreateAction.snapshotPostFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
    }
}

export function* SnapshotCreateSaga() {
    yield takeEvery(SNAPSHOT.SNAPSHOT_POST, snapshotPost);
}
