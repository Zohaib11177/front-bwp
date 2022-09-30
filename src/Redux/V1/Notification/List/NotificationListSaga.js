import { takeEvery, put } from "redux-saga/effects";
import NOTIFICATION from "Redux/V1/Notification/ActionType";
import NotificationListAction2 from "Redux/V1/Notification/List/NotificationListAction";
import NotificationService from "Services/V1/NotificationService";

function* notificationList(data) {
    try {
        const response = yield NotificationService.notificationList(
            data.request
        );
        if (response.success) {
            yield put(
                NotificationListAction2.notificationListSuccess(response.data)
            );
        } else {
            yield put(
                NotificationListAction2.notificationListFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* NotificationListSaga2() {
    yield takeEvery(NOTIFICATION.NOTIFICATION_LIST, notificationList);
}
