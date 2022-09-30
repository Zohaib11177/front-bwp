import { takeEvery, put } from 'redux-saga/effects';
import SSL from 'Redux/V1/Ssl/ActionType';
import SslRevokeAction from 'Redux/V1/Ssl/Delete/SslDeleteAction';
import SslService from 'Services/V1/SslService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";
import DomainListAction from 'Redux/V1/Domain/Get/DomainGetAction';
function* sslDelete(data) {
    try {
        ToastHelper.info();
        const response = yield SslService.sslDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SslRevokeAction.sslDeleteSuccess(response.data));
            yield put(DomainListAction.domainGet(data.request.identity));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SslRevokeAction.sslDeleteFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(SslRevokeAction.sslDeleteFailed());
    }
}

export function* sslDeleteSaga() {
    yield takeEvery(SSL.SSL_DELETE, sslDelete);
}
