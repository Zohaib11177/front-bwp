import { takeEvery, put } from 'redux-saga/effects';
import SSL from 'Redux/V1/Ssl/ActionType';
import SslEnableAction from 'Redux/V1/Ssl/Put/SslPutAction';
import SslService from 'Services/V1/SslService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";
import DomainListAction from 'Redux/V1/Domain/Get/DomainGetAction';
function* sslEnable(data) {
    try {
        ToastHelper.info();
        const response = yield SslService.enable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SslEnableAction.sslPutSuccess(response.data));
            yield put(DomainListAction.domainGet(data.request.identity));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SslEnableAction.sslPutFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(SslEnableAction.sslPutFailed());
    }
}

export function* sslEnableSaga() {
    yield takeEvery(SSL.SSL_PUT, sslEnable);
}
