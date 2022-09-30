import NOTIFICATION from "Redux/V1/Notification/ActionType";

const notificationRead = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_READ,
        request: data,
    };
};
const notificationReadSuccess = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_READ_SUCCESS,
        response: data,
    };
};

const notificationReadFailed = (data) => {
    return {
        type: NOTIFICATION.NOTIFICATION_READ_FAILED,
        response: data,
    };
};

const NotificationReadAction = {
    notificationRead,
    notificationReadSuccess,
    notificationReadFailed,
};
export default NotificationReadAction;
