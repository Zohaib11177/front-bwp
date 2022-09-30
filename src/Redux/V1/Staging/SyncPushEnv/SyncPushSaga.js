import { takeEvery, put } from "redux-saga/effects";
import STAGING from "Redux/V1/Staging/ActionType";
import SyncPushAction from "Redux/V1/Staging/SyncPushEnv/SyncPushAction";
import StagingService from "Services/V1/StagingService";
import ToastHelper from "Helpers/ToastHelper";

function* syncPush(data) {
    try {
        ToastHelper.info();
        const response = yield StagingService.syncPushEnv(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SyncPushAction.syncPushSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SyncPushAction.syncPushFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SyncPushAction.syncPushFailed());
    }
}

export function* syncPushSaga() {
    yield takeEvery(STAGING.SYNC_PUSH_LIVE, syncPush);
}
