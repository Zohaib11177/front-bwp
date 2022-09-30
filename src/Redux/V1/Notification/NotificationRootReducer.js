import { combineReducers } from "redux";
import NotificationListReducer from "Redux/V1/Notification/Get/NotificationGetReducer";
import NotificationReadReducer from "Redux/V1/Notification/NotificationRead/NotificationReadReducer";
import NotificationListReducer2 from "Redux/V1/Notification/List/NotificationListReducer";

const NotificationRootReducer = combineReducers({
    list: NotificationListReducer,
    notificationRead: NotificationReadReducer,
    notificationList: NotificationListReducer2,
});
export default NotificationRootReducer;
