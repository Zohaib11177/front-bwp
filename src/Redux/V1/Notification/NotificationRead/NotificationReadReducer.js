import NOTIFICATION from "Redux/V1/Notification/ActionType";

const NotificationReadReducer = (
    state = {
        loading: false,
        success: false,
        notification_read: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case NOTIFICATION.NOTIFICATION_READ:
            return {
                ...state,
                loading: true,
                success: false,
                notification_read: [],
                err_mess: null,
            };
        case NOTIFICATION.NOTIFICATION_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                notification_read: action.response,
                success: true,
                err_mess: null,
            };
        case NOTIFICATION.NOTIFICATION_READ_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                notification_read: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default NotificationReadReducer;
