import { takeEvery, put } from "redux-saga/effects";
import STAGING from "Redux/V1/Staging/ActionType";
import StagingCreateAction from "Redux/V1/Staging/Post/StagingPostAction";
import StagingService from "Services/V1/StagingService";
import ToastHelper from "Helpers/ToastHelper";

function* stagingPost(data) {
    try {
        ToastHelper.info();
        const response = yield StagingService.stagingPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(StagingCreateAction.stagingPostSuccess(response.data));
            window.location.reload();
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                StagingCreateAction.stagingPostFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(StagingCreateAction.stagingPostFailed());
    }
}

export function* stagingPostSaga() {
    yield takeEvery(STAGING.STAGING_POST, stagingPost);
}
