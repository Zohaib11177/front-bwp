import { takeEvery, put } from "redux-saga/effects";
import STAGING from "Redux/V1/Staging/ActionType";
import SyncPutAction from "Redux/V1/Staging/Put/SyncPutAction";
import StagingService from "Services/V1/StagingService";
import ToastHelper from "Helpers/ToastHelper";

function* syncPut(data) {
    try {
        ToastHelper.info();
        const response = yield StagingService.syncPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SyncPutAction.syncPutSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SyncPutAction.syncPutFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SyncPutAction.syncPutFailed());
    }
}

export function* syncPutSaga() {
    yield takeEvery(STAGING.SYNC_PUT, syncPut);
}
