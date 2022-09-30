import { takeEvery, put } from 'redux-saga/effects';
import AUTH_V6 from 'Redux/V6/Auth/ActionTypeV6';
import LoginActionV6 from 'Redux/V6/Auth/Login/LoginActionV6';
import AuthServiceV6 from 'Services/V6/AuthServiceV6';
// import LoginBusiness from "Businesses/LoginBusiness";
import ToastHelper from 'Helpers/ToastHelper';
// import { identifyUser } from "Helpers/IdentifyUserHelper";

function* login(data) {
    try {
        ToastHelper.info();
        const response = yield AuthServiceV6.login(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(LoginActionV6.loginSuccess(response.data));
        } else {
            yield put(LoginActionV6.loginFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

function loginSuccess(data) {
    console.log(data);
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
    localStorage.setItem(
        'portal_settings',
        JSON.stringify(data.response.portal_settings) || JSON.stringify({})
    );

    window.location.href = '/dashboard';
}

function loginFailed(data) {
    ToastHelper.error(data.response);
}

export function* LoginSagaV6() {
    yield takeEvery(AUTH_V6.LOGIN_V6, login);
}

export function* LoginSuccessSagaV6() {
    yield takeEvery(AUTH_V6.LOGIN_SUCCESS_V6, loginSuccess);
}

export function* LoginFailedSagaV6() {
    yield takeEvery(AUTH_V6.LOGIN_FAILED_V6, loginFailed);
}
