import { takeEvery, put } from "redux-saga/effects";
import PASSWORD from "./ChangePasswordActionType";
import PasswordUpdateAction from "Redux/V1/ChangePassword/ChangePasswordAction";
import ToastHelper from "Helpers/ToastHelper";
import ChangePasswordService from "Services/V1/ChangePasswordService";

function* passwordPut(data) {
    try {
        ToastHelper.info();
        const response = yield ChangePasswordService.passwordPutBody(
            data.request.form
        );
        if (response.success) {
            ToastHelper.success("Your Password has been, please re-login");
            yield put(PasswordUpdateAction.passwordPutSuccess(response.data));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                PasswordUpdateAction.passwordPutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(PasswordUpdateAction.passwordPutFailed());
    }
}

export function* ChangePasswordPutSaga() {
    yield takeEvery(PASSWORD.CHANGE_PASSWORD, passwordPut);
}
