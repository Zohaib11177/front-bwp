import { takeEvery, put } from 'redux-saga/effects';
import OPERATION from 'Redux/V2/Sites/Operations/ActionTypeV2';
import PhpRestartActionV2 from 'Redux/V2/Sites/Operations/PHPRestart/PHPRestartActionV2';
import SiteOperationServiceV2 from 'Services/V2/SiteOperationServiceV2';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* phpRestart(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationServiceV2.phpRestart(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PhpRestartActionV2.phpRestartSuccess());
        } else {
            ToastHelper.error(response.error.message);
            yield put(PhpRestartActionV2.phpRestartFailed());
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(PhpRestartActionV2.phpRestartFailed());
    }
}

export function* PhpRestartSagaV2() {
    yield takeEvery(OPERATION.PHP_RESTART_V2, phpRestart);
}
