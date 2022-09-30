import { takeEvery, put } from "redux-saga/effects";
import NOTIFICATION from "Redux/V1/Notification/ActionType";
import NotificationReadAction from "Redux/V1/Notification/NotificationRead/NotificationReadAction";
// import NotificationListAction from "Redux/V1/Notification/Get/NotificationGetAction";
import NotificationService from "Services/V1/NotificationService";
function* notificationRead(data) {
    try {
        const response = yield NotificationService.notificationRead(
            data.request
        );
        console.log(response);
        if (response.success) {
            yield put(
                NotificationReadAction.notificationReadSuccess(data.request)
            );
        } else {
            yield put(
                NotificationReadAction.notificationReadFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* NotificationReadSaga() {
    yield takeEvery(NOTIFICATION.NOTIFICATION_READ, notificationRead);
}
