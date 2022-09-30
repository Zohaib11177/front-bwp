import { takeEvery, put } from 'redux-saga/effects';
import REGISTER from 'Redux/V3/Auth/Register/Post/ActionType';
import RegisterAction from 'Redux/V3/Auth/Register/Post/RegisterPostAction';
import AuthService from 'Services/V3/AuthService';
// import RegistrationBusiness from "Businesses/RegistrationBusiness";
import { identifyUser } from 'Helpers/IdentifyUserHelper';
import LogHelper from 'Helpers/LogHelper';
import { ToastHeader } from 'react-bootstrap';

function* registerPost(data) {
    try {
        const response = yield AuthService.registerPost(data.request);
        if (response.success) {
            yield put(RegisterAction.registerPostSuccess(response.data));
        } else {
            yield put(
                RegisterAction.registerPostFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error, 'Register Saga');
        ToastHeader.error();
        yield put(RegisterAction.registerPostFailed());
    }
}

function registerPostSuccess(data) {
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
        data.response.authentication.affiliate_code
    );
    identifyUser(
        data.response.authentication.user.id,
        data.response.authentication.user.first_name +
            ' ' +
            data.response.authentication.user.last_name,
        data.response.authentication.user.email
    );
    setTimeout(function () {
        window.location.href = '/dashboard';
    }, 1000);
}

function registerPostFailed(data) {
    LogHelper.print('Registration Failed');
}

export function* registerPostSaga() {
    yield takeEvery(REGISTER.REGISTRATION_POST, registerPost);
}

export function* registerPostSuccessSaga(data) {
    yield takeEvery(REGISTER.REGISTRATION_POST_SUCCESS, registerPostSuccess);
}

export function* registerPostFailedSaga() {
    yield takeEvery(REGISTER.REGISTRATION_POST_FAILED, registerPostFailed);
}
