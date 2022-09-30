import { takeEvery, put } from "redux-saga/effects";
import SSL from "Redux/V1/Ssl/ActionType";
import SslRenewAction from "Redux/V1/Ssl/SslRenew/SslRenewAction";
import SslService from "Services/V1/SslService";
import ToastHelper from "Helpers/ToastHelper";
import DomainListAction from "Redux/V1/Domain/Get/DomainGetAction";
function* sslRenew(data) {
    try {
        ToastHelper.info();
        const response = yield SslService.sslRenew(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SslRenewAction.sslRenewSuccess(response.data));
            yield put(DomainListAction.domainGet(data.request.identity));
        } else {
            ToastHelper.error(response.error.message);
            yield put(SslRenewAction.sslRenewFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SslRenewAction.sslRenewFailed());
    }
}

export function* SslRenewSaga() {
    yield takeEvery(SSL.SSL_RENEW, sslRenew);
}
