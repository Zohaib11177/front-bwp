import { takeEvery, put } from 'redux-saga/effects';
import AUTH_V4 from 'Redux/V4/Auth/ActionTypeV4';
import LoginActionV4 from 'Redux/V4/Auth/Login/LoginActionV4';
import AuthServiceV4 from 'Services/V4/AuthServiceV4';
// import LoginBusiness from "Businesses/LoginBusiness";
import ToastHelper from 'Helpers/ToastHelper';
import { identifyUser } from 'Helpers/IdentifyUserHelper';

function* login(data) {
    try {
        ToastHelper.info();
        const response = yield AuthServiceV4.login(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(LoginActionV4.loginSuccess(response.data));
        } else {
            yield put(LoginActionV4.loginFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

function loginSuccess(data) {
    localStorage.setItem(
        'access_token',
        data.response.authentication.access_token
    );
    localStorage.setItem(
        'user',
        JSON.stringify(data.response.authentication.user)
    );
    localStorage.setItem(
        'permissions',
        JSON.stringify(data.response.authentication.permissions)
    );
    localStorage.setItem(
        'wallet',
        JSON.stringify(data.response.authentication.wallet)
    );
    localStorage.setItem(
        'affiliate_code',
        data.response.authentication.affiliate_code || null
    );
    identifyUser(
        data.response.authentication.user.id,
        data.response.authentication.user.first_name +
            ' ' +
            data.response.authentication.user.last_name,
        data.response.authentication.user.email
    );
    window.location.href = '/dashboard';
}

function loginFailed(data) {
    ToastHelper.error(data.response);
}

export function* LoginSagaV4() {
    yield takeEvery(AUTH_V4.LOGIN_V4, login);
}

export function* LoginSuccessSagaV4() {
    yield takeEvery(AUTH_V4.LOGIN_SUCCESS_V4, loginSuccess);
}

export function* LoginFailedSagaV4() {
    yield takeEvery(AUTH_V4.LOGIN_FAILED_V4, loginFailed);
}
