import { takeEvery, put } from "redux-saga/effects";

import PROFILE from "Redux/V1/Profiles/ActionType";
import ProfileUpdateAction from "Redux/V1/Profiles/Put/ProfilePutAction";
import ProfileUpdateService from "Services/V1/ProfileUpdateService";
import ToastHelper from "Helpers/ToastHelper";

function* profilePut(data) {
    try {
        ToastHelper.info();
        const response = yield ProfileUpdateService.profilePutBody(
            data.request.form
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(ProfileUpdateAction.profilePutSuccess(response.data));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                ProfileUpdateAction.profilePutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error();
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(ProfileUpdateAction.profilePutFailed());
    }
}

export function* ProfilePutSaga() {
    yield takeEvery(PROFILE.PROFILE_PUT, profilePut);
}
