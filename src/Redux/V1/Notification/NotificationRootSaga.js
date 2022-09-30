import { all } from "redux-saga/effects";
import { NotificationListSaga } from "Redux/V1/Notification/Get/NotificationGetSaga";
import { NotificationReadSaga } from "Redux/V1/Notification/NotificationRead/NotificationReadSaga";
import { NotificationListSaga2 } from "Redux/V1/Notification/List/NotificationListSaga";

export default function* NotificationRootSaga() {
    yield all([
        NotificationListSaga(),
        NotificationReadSaga(),
        NotificationListSaga2(),
    ]);
}
