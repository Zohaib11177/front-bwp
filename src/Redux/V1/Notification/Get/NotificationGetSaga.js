import { takeEvery, put } from "redux-saga/effects";
import NOTIFICATION from "Redux/V1/Notification/ActionType";
import NotificationListAction from "Redux/V1/Notification/Get/NotificationGetAction";
import NotificationService from "Services/V1/NotificationService";
function* notificationGet(data) {
    try {
        const response = yield NotificationService.notificationGet(
            data.request
        );
        if (response.success) {
            yield put(
                NotificationListAction.notificationGetSuccess(response.data)
            );
        } else {
            yield put(
                NotificationListAction.notificationGetFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* NotificationListSaga() {
    yield takeEvery(NOTIFICATION.NOTIFICATION_GET, notificationGet);
}
