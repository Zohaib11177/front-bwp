import { takeEvery, put } from "redux-saga/effects";
import LOGIN from "Redux/V1/Auth/Login/Post/ActionType";
import LoginAction from "Redux/V1/Auth/Login/Post/LoginPostAction";
import AuthService from "Services/V1/AuthService";
import LoginBusiness from "Businesses/LoginBusiness";
import { identifyUser } from "Helpers/IdentifyUserHelper";
import ToastHelper from "Helpers/ToastHelper";
function* loginPost(data) {
    try {
        ToastHelper.info();
        const response = yield AuthService.loginPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(LoginAction.loginPostSuccess(response.data));
           
            window.location.reload();
        } else {
            yield put(LoginAction.loginPostFailed(response.error.message));
        }
    } catch (error) {
        yield put(LoginAction.loginPostFailed());
    }
}

function loginPostSuccess(data) {
    localStorage.setItem(
        "access_token",
        data.response.authentication.access_token
    );
    localStorage.setItem(
        "user",
        JSON.stringify(data.response.authentication.user)
    );
    localStorage.setItem(
        "permissions",
        JSON.stringify(data.response.authentication.permissions)
    );
    localStorage.setItem(
        "wallet",
        JSON.stringify(data.response.authentication.wallet)
    );
    localStorage.setItem(
        "affiliate_code",
        data.response.authentication.affiliate_code || null
    );
    identifyUser(
        data.response.authentication.user.id,
        data.response.authentication.user.first_name +
            " " +
            data.response.authentication.user.last_name,
        data.response.authentication.user.email
    );
    window.location.href = "/dashboard";
}

function loginPostFailed(data) {
    ToastHelper.error(data.response);
}

export function* loginPostSaga() {
    yield takeEvery(LOGIN.LOGIN_POST, loginPost);
}

export function* loginPostSuccessSaga() {
    yield takeEvery(LOGIN.LOGIN_POST_SUCCESS, loginPostSuccess);
}

export function* loginPostFailedSaga() {
    yield takeEvery(LOGIN.LOGIN_POST_FAILED, loginPostFailed);
}
