import NOTIFICATION from "Redux/V1/Notification/ActionType";

const notificationGet = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_GET,
        request: data,
    };
};
const notificationGetSuccess = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_GET_SUCCESS,
        response: data,
    };
};

const notificationGetFailed = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_GET_FAILED,
        response: data,
    };
};

const NotificationListAction = {
    notificationGet,
    notificationGetSuccess,
    notificationGetFailed,
};
export default NotificationListAction;
