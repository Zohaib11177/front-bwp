import { takeEvery, put } from "redux-saga/effects";
import STAGING from "Redux/V6/Staging/ActionTypeV6";
import StagingCreateActionV6 from "Redux/V6/Staging/Post/StagingPostActionV6";
import StagingServiceV6 from "Services/V6/StagingServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* stagingPost(data) {
    try {
        ToastHelper.info();
        const response = yield StagingServiceV6.stagingPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(StagingCreateActionV6.stagingPostSuccess(response.data));
            window.location.reload();
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                StagingCreateActionV6.stagingPostFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(StagingCreateActionV6.stagingPostFailed());
    }
}

export function* stagingPostSagaV6() {
    yield takeEvery(STAGING.STAGING_POST_V6, stagingPost);
}
