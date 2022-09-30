import { takeEvery, put } from "redux-saga/effects";
import STAGING from "Redux/V1/Staging/ActionType";
import StagingRenewalAction from "Redux/V1/Staging/StagingRenewal/StagingRenewalAction";
import StagingService from "Services/V1/StagingService";
import ToastHelper from "Helpers/ToastHelper";

function* stagingRenewal(data) {
    try {
        ToastHelper.info();
        const response = yield StagingService.stagingRenewal(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                StagingRenewalAction.stagingRenewalSuccess(response.data)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                StagingRenewalAction.stagingRenewalFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(StagingRenewalAction.stagingRenewalFailed());
    }
}

export function* StagingRenewalSaga() {
    yield takeEvery(STAGING.STAGING_RENEWAL, stagingRenewal);
}
