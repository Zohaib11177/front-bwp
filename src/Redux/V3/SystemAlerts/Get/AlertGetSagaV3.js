import { takeEvery, put } from "redux-saga/effects";
import ALERT from "Redux/V3/SystemAlerts/AlertRootActionTypeV3";
import AlertListActionV3 from "Redux/V3/SystemAlerts/Get/AlertGetActionV3";
import SystemAlertServiceV3 from "Services/V3/SystemAlertServiceV3";

function* alertGet() {
    try {
        localStorage.removeItem("alert_message");
        localStorage.removeItem("alert_status");
        const response = yield SystemAlertServiceV3.alertGet();
        if (response.success) {
            yield put(AlertListActionV3.alertGetSuccess(response.data));
            localStorage.setItem(
                "alert_message",
                response.data.system_alert.message
            );
            localStorage.setItem(
                "alert_status",
                response.data.system_alert.status
            );
        } else {
            yield put(AlertListActionV3.alertGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* AlertListSagaV3() {
    yield takeEvery(ALERT.ALERT_GET_V3, alertGet);
}
