import NOTIFICATION from "Redux/V1/Notification/ActionType";

const NotificationListReducer2 = (
    state = {
        loading: false,
        success: false,
        notification_list: [],
        pagination: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case NOTIFICATION.NOTIFICATION_LIST:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
                notification_list: [],
            };
        case NOTIFICATION.NOTIFICATION_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                notification_list: action.response.notifications,
                pagination: action.response.pagination,
                success: true,
                err_mess: null,
            };
        case NOTIFICATION.NOTIFICATION_LIST_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                notification_list: [],
                pagination: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default NotificationListReducer2;
