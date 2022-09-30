import { takeEvery, put } from 'redux-saga/effects';
import STAGING from 'Redux/V1/Staging/ActionType';
import StagingDeleteAction from 'Redux/V1/Staging/Delete/StagingDeleteAction';
import StagingService from 'Services/V1/StagingService';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";
import ToastHelper from 'Helpers/ToastHelper';

function* stagingDelete(data) {
    try {
        ToastHelper.info('Loading please wait...');
        const response = yield StagingService.stagingDelete(
            data.request.identity
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(StagingDeleteAction.stagingDeleteSuccess(response.data));

            setTimeout(() => {
                window.location.href = '/sites';
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                StagingDeleteAction.stagingDeleteFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(StagingDeleteAction.stagingDeleteFailed());
    }
}

export function* stagingDeleteSaga() {
    yield takeEvery(STAGING.STAGING_DELETE, stagingDelete);
}
