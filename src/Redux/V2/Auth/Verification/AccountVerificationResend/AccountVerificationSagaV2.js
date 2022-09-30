import { takeEvery, put } from "redux-saga/effects";

import AUTHV2 from "Redux/V2/Auth/AuthActionTypeV2";
import AccountVerificationActionV2 from "Redux/V2/Auth/Verification/AccountVerificationResend/AccountVerificationActionV2";
import AuthServiceV2 from "Services/V2/AuthServiceV2";
import ToastHelper from "Helpers/ToastHelper";
// import LocalStorageHelper from "Helpers/LocalStorageHelper";

function* accountVerification(data) {
    try {
        ToastHelper.info();
        const response = yield AuthServiceV2.accountVerification(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                AccountVerificationActionV2.accountVerificationSuccess(
                    response.data
                )
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                AccountVerificationActionV2.accountVerificationFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
        yield put(AccountVerificationActionV2.accountVerificationFailed());
    }
}

export function* AccountVerificationSagaV2() {
    yield takeEvery(AUTHV2.ACCOUNT_VERIFICATION_V2, accountVerification);
}
