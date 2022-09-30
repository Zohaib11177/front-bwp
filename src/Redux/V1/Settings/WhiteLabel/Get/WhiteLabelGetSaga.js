import { takeEvery, put } from "redux-saga/effects";
import SETTINGS from "Redux/V1/Settings/ActionType";
import WhiteLabelDetailAction from "Redux/V1/Settings/WhiteLabel/Get/WhiteLabelGetAction";
import SETTINGS_SERVICE from "Services/V1/SettingsService";
import ToastHelper from "Helpers/ToastHelper";

function* whiteLabelGet(data) {
    try {
        const response = yield SETTINGS_SERVICE.whiteLabelGet(data.request);
        if (response.success) {
            yield put(
                WhiteLabelDetailAction.whiteLabelGetSuccess(response.data)
            );
            // window.location.reload();
        } else {
            yield put(
                WhiteLabelDetailAction.whiteLabelGetFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* whiteLabelDetailSaga() {
    yield takeEvery(SETTINGS.WHITE_LABEL_GET, whiteLabelGet);
}
