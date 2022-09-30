import { all } from "redux-saga/effects";
import { passwordPostSaga } from "Redux/V1/Auth/PasswordForgot/Post/PasswordPostSaga";
import { passwordPutSaga } from "Redux/V1/Auth/PasswordReset/Put/PasswordPutSaga";
import { logoutSaga } from "Redux/V1/Auth/Logout/LogoutSaga";
import { AccVerificationResendSaga } from "Redux/V1/Auth/Verification/AccountVerificationResend/AccVerificationResendSaga";

export default function* AuthRootSaga() {
    yield all([
        passwordPostSaga(),
        passwordPutSaga(),
        logoutSaga(),
        AccVerificationResendSaga(),
    ]);
}
