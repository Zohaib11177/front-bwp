import { takeEvery, put } from 'redux-saga/effects';
import AUTH_V6 from 'Redux/V6/Auth/ActionTypeV6';
import RegisterActionV6 from 'Redux/V6/Auth/Register/RegisterActionV6';
import AuthServiceV6 from 'Services/V6/AuthServiceV6';
// import RegistrationBusiness from "Businesses/RegistrationBusiness";
// import { identifyUser } from "Helpers/IdentifyUserHelper";
import LogHelper from 'Helpers/LogHelper';
import { ToastHeader } from 'react-bootstrap';

function* register(data) {
    try {
        const response = yield AuthServiceV6.register(data.request);
        if (response.success) {
            yield put(RegisterActionV6.registerSuccess(response.data));
        } else {
            yield put(RegisterActionV6.registerFailed(response.error.message));
        }
    } catch (error) {
        ToastHeader.error();
        yield put(RegisterActionV6.registerFailed());
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

export function* RegisterSagaV6() {
    yield takeEvery(AUTH_V6.REGISTRATION_V6, register);
}

export function* RegisterSuccessSagaV6(data) {
    yield takeEvery(AUTH_V6.REGISTRATION_SUCCESS_V6, registerSuccess);
}

export function* RegisterFailedSagaV6() {
    yield takeEvery(AUTH_V6.REGISTRATION_FAILED_V6, registerFailed);
}
