import { takeEvery, put } from "redux-saga/effects";
import SSL_ACTION_TYPE from "Redux/V1/Sites/Ssl/ActionTypes";
import GetSslAction from "Redux/V1/Sites/Ssl/Get/Actions";
import SslService from "Services/V1/SslService";
import ToastHelper from "Helpers/ToastHelper";

function* getSsl(data) {
    try {
        const response = yield SslService.get(data.request);
        if (response.success) {
            yield put(GetSslAction.getSslSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(GetSslAction.getSslFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* getSslSaga() {
    yield takeEvery(SSL_ACTION_TYPE.GET_SSL, getSsl);
}
