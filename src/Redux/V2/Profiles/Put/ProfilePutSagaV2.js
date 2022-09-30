import { takeEvery, put } from "redux-saga/effects";
import PROFILE from "Redux/V2/Profiles/ActionTypeV2";
import ProfileUpdateActionV2 from "Redux/V2/Profiles/Put/ProfilePutActionV2";
import ProfileServiceV2 from "Services/V2/ProfileServiceV2";
import ToastHelper from "Helpers/ToastHelper";

function* profilePutV2(data) {
    try {
        ToastHelper.info();
        const response = yield ProfileServiceV2.profilePut(data.request.form);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(ProfileUpdateActionV2.profilePutSuccess(response.data));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                ProfileUpdateActionV2.profilePutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(ProfileUpdateActionV2.profilePutFailed());
    }
}

export function* ProfileUpdateSagaV2() {
    yield takeEvery(PROFILE.PROFILE_PUT_V2, profilePutV2);
}
