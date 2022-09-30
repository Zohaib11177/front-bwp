import { takeEvery, put } from 'redux-saga/effects';
import OPERATION from 'Redux/V2/Sites/Operations/ActionTypeV2';
import SiteOperationServiceV2 from 'Services/V2/SiteOperationServiceV2';
import ToastHelper from 'Helpers/ToastHelper';
import NginxRestartActionV2 from 'Redux/V2/Sites/Operations/NginxRestart/NginxRestartActionV2';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* nginxRestart(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationServiceV2.nginxRestart(
            data.request
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(NginxRestartActionV2.nginxRestartSuccess());
        } else {
            ToastHelper.error(response.error.message);
            yield put(NginxRestartActionV2.nginxRestartFailed());
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(NginxRestartActionV2.nginxRestartFailed());
    }
}

export function* NginxRestartSagaV2() {
    yield takeEvery(OPERATION.NGINX_RESTART_V2, nginxRestart);
}
