import { takeEvery, put } from 'redux-saga/effects';
import AUTH_V4 from 'Redux/V4/Auth/ActionTypeV4';
import RegisterActionV4 from 'Redux/V4/Auth/Register/RegisterActionV4';
import AuthService from 'Services/V4/AuthServiceV4';
// import RegistrationBusiness from "Businesses/RegistrationBusiness";
// import { identifyUser } from "Helpers/IdentifyUserHelper";
import LogHelper from 'Helpers/LogHelper';
import { ToastHeader } from 'react-bootstrap';

function* register(data) {
    try {
        const response = yield AuthService.register(data.request);
        if (response.success) {
            yield put(RegisterActionV4.registerSuccess(response.data));
        } else {
            yield put(RegisterActionV4.registerFailed(response.error.message));
        }
    } catch (error) {
        console.log(error, 'Register Saga');
        ToastHeader.error();
        yield put(RegisterActionV4.registerFailed());
    }
}

function registerSuccess(data) {
    // localStorage.setItem(
    //     "access_token",
    //     data.response.authentication.access_token
    // );
    // localStorage.setItem(
    //     "user",
    //     JSON.stringify(data.response.authentication.user)
    // );
    // localStorage.setItem(
    //     "permissions",
    //     JSON.stringify(data.response.authentication.permissions)
    // );
    // localStorage.setItem(
    //     "wallet",
    //     JSON.stringify(data.response.authentication.wallet)
    // );
    // localStorage.setItem(
    //     "affiliate_code",
    //     data.response.authentication.affiliate_code
    // );
    // identifyUser(
    //     data.response.authentication.user.id,
    //     data.response.authentication.user.first_name +
    //         " " +
    //         data.response.authentication.user.last_name,
    //     data.response.authentication.user.email
    // );
    // setTimeout(function () {
    //     window.location.href = "/dashboard";
    // }, 1000);
}

function registerFailed(data) {
    LogHelper.print('Registration Failed');
}

export function* RegisterSagaV4() {
    yield takeEvery(AUTH_V4.REGISTRATION_V4, register);
}

export function* RegisterSuccessSagaV4(data) {
    yield takeEvery(AUTH_V4.REGISTRATION_SUCCESS_V4, registerSuccess);
}

export function* RegisterFailedSagaV4() {
    yield takeEvery(AUTH_V4.REGISTRATION_FAILED_V4, registerFailed);
}
