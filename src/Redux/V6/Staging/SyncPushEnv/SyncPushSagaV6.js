import { takeEvery, put } from "redux-saga/effects";
import STAGING from "Redux/V6/Staging/ActionTypeV6";
import SyncPushActionV6 from "Redux/V6/Staging/SyncPushEnv/SyncPushActionV6";
import StagingServiceV6 from "Services/V6/StagingServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* syncPush(data) {
    try {
        ToastHelper.info();
        const response = yield StagingServiceV6.syncPushEnv(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SyncPushActionV6.syncPushSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SyncPushActionV6.syncPushFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SyncPushActionV6.syncPushFailed());
    }
}

export function* syncPushSagaV6() {
    yield takeEvery(STAGING.SYNC_PUSH_LIVE_V6, syncPush);
}
