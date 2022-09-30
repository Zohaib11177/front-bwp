import { takeEvery, put } from "redux-saga/effects";

import AUTH from "Redux/V1/Auth/AuthActionType";
import AccVerificationResendAction from "Redux/V1/Auth/Verification/AccountVerificationResend/AccVerificationResendAction";
import AuthService from "Services/V1/AuthService";
import ToastHelper from "Helpers/ToastHelper";

function* accVerificationResend(data) {
    try {
        ToastHelper.info();
        const response = yield AuthService.accVerificationResend(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                AccVerificationResendAction.accVerificationResendSuccess(
                    response.data
                )
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                AccVerificationResendAction.accVerificationResendFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
        yield put(AccVerificationResendAction.accVerificationResendFailed());
    }
}

export function* AccVerificationResendSaga() {
    yield takeEvery(AUTH.ACC_VERIFICATION_RESEND, accVerificationResend);
}
