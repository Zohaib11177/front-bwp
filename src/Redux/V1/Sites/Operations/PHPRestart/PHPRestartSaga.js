import { takeEvery, put } from 'redux-saga/effects';
import OPERATION from 'Redux/V1/Sites/Operations/ActionType';
import PhpRestartAction from './PHPRestartAction';
import SiteOperationService from 'Services/V1/SiteOperationService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* phpRestart(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationService.phpRestart(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PhpRestartAction.phpRestartSuccess());
        } else {
            ToastHelper.error(response.error.message);
            yield put(PhpRestartAction.phpRestartFailed());
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(PhpRestartAction.phpRestartFailed());
    }
}

export function* PhpRestartSaga() {
    yield takeEvery(OPERATION.PHP_RESTART, phpRestart);
}
