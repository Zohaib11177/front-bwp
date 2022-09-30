import { takeEvery, put } from "redux-saga/effects";
import SETTINGS from "Redux/V1/Settings/ActionType";
import ServiceListAction from "Redux/V1/Settings/Services/Get/ServiceGetAction";
import SETTINGS_SERVICE from "Services/V1/SettingsService";
import ToastHelper from "Helpers/ToastHelper";
import WhiteLabelDetailAction from "Redux/V1/Settings/WhiteLabel/Get/WhiteLabelGetAction";
function* whiteLabelToggle(data) {
    try {
        ToastHelper.info();
        const response = yield SETTINGS_SERVICE.whiteLabelToggle();
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(ServiceListAction.serviceGet());
            yield put(WhiteLabelDetailAction.whiteLabelGet("1"));
            window.location.reload();
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WhiteLabelDetailAction.whiteLabelGetFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(ServiceListAction.serviceGetFailed());
    }
}

export function* whiteLabelToggleSaga() {
    yield takeEvery(SETTINGS.WHITE_LABEL_TOGGLE, whiteLabelToggle);
}
