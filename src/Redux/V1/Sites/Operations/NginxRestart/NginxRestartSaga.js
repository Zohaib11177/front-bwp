import { takeEvery, put } from 'redux-saga/effects';
import OPERATION from 'Redux/V1/Sites/Operations/ActionType';
import SiteOperationService from 'Services/V1/SiteOperationService';
import ToastHelper from 'Helpers/ToastHelper';
import NginxRestartAction from './NginxRestartAction';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* nginxRestart(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationService.nginxRestart(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(NginxRestartAction.nginxRestartSuccess());
        } else {
            ToastHelper.error(response.error.message);
            yield put(NginxRestartAction.nginxRestartFailed());
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(NginxRestartAction.nginxRestartFailed());
    }
}

export function* NginxRestartSaga() {
    yield takeEvery(OPERATION.NGINX_RESTART, nginxRestart);
}
