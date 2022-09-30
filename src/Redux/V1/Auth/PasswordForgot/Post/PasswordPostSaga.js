import { takeEvery, put } from "redux-saga/effects";

import PASSWORD from "Redux/V1/Auth/PasswordForgot/Post/ActionType";
import ForgotPasswordAction from "Redux/V1/Auth/PasswordForgot/Post/PasswordPostAction";
import AuthService from "Services/V1/AuthService";
import ToastHelper from "Helpers/ToastHelper";

function* passwordPost(data) {
    try {
        ToastHelper.info();
        const response = yield AuthService.forgotPost(data.request);
        if (response.success) {
            ToastHelper.success("Please check your email.");
            yield put(ForgotPasswordAction.passwordPostSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                ForgotPasswordAction.passwordPostFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* passwordPostSaga() {
    yield takeEvery(PASSWORD.PASSWORD_POST, passwordPost);
}
