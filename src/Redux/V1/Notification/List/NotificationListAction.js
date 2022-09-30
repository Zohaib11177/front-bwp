import NOTIFICATION from "Redux/V1/Notification/ActionType";

const notificationList = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_LIST,
        request: data,
    };
};
const notificationListSuccess = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_LIST_SUCCESS,
        response: data,
    };
};

const notificationListFailed = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_LIST_FAILED,
        response: data,
    };
};

const NotificationListAction2 = {
    notificationList,
    notificationListSuccess,
    notificationListFailed,
};
export default NotificationListAction2;
