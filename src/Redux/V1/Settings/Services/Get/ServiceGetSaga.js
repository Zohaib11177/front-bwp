import { takeEvery, put } from "redux-saga/effects";
import ServiceListAction from "Redux/V1/Settings/Services/Get/ServiceGetAction";
import SETTINGS_SERVICE from "Services/V1/SettingsService";
// import ToastHelper from "Helpers/ToastHelper";
import SETTINGS from "Redux/V1/Settings/ActionType";

function* serviceGet(data) {
    try {
        const response = yield SETTINGS_SERVICE.servicesGet(data.request);
        if (response.success) {
            yield put(ServiceListAction.serviceGetSuccess(response.data));
        } else {
            yield put(
                ServiceListAction.serviceGetFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* ServiceListSaga() {
    yield takeEvery(SETTINGS.SERVICE_GET, serviceGet);
}
