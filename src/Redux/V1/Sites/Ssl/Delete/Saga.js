import { takeEvery, put } from 'redux-saga/effects';
import SSL_ACTION_TYPE from 'Redux/V1/Sites/Ssl/ActionTypes';
import DisableSslAction from 'Redux/V1/Sites/Ssl/Delete/Actions';
import SslService from 'Services/V1/SslService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* disableSsl(data) {
    try {
        ToastHelper.info();
        const response = yield SslService.disable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(DisableSslAction.disableSslSuccess(response.data));
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                DisableSslAction.disableSslFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* disableSslSaga() {
    yield takeEvery(SSL_ACTION_TYPE.DISABLE_SSL, disableSsl);
}
