import { takeEvery, put } from "redux-saga/effects";

import PASSWORD from "Redux/V1/Auth/PasswordReset/Put/ActionType";
import PasswordResetAction from "Redux/V1/Auth/PasswordReset/Put/PasswordPutAction";
import AuthService from "Services/V1/AuthService";
import ToastHelper from "Helpers/ToastHelper";

function* passwordPut(data) {
    try {
        ToastHelper.info();
        const response = yield AuthService.resetPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PasswordResetAction.passwordPutSuccess(response.data));
            window.location.href = "/login";
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                PasswordResetAction.passwordPutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* passwordPutSaga() {
    yield takeEvery(PASSWORD.PASSWORD_PUT, passwordPut);
}
