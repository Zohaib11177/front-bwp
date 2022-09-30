import { takeEvery, put } from "redux-saga/effects";
import STAGING from "Redux/V1/Staging/ActionType";
import StagingLogsAction from "Redux/V1/Staging/StagingLogs/StagingLogsAction";
import StagingService from "Services/V1/StagingService";
import ToastHelper from "Helpers/ToastHelper";

function* stagingLogs(data) {
    try {
        const response = yield StagingService.stagingLogs(data.request);
        if (response.success) {
            yield put(StagingLogsAction.stagingLogsSuccess(response.data));
        } else {
            yield put(
                StagingLogsAction.stagingLogsFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(StagingLogsAction.stagingLogsFailed());
    }
}

export function* StagingLogsSaga() {
    yield takeEvery(STAGING.STAGING_LOGS, stagingLogs);
}
