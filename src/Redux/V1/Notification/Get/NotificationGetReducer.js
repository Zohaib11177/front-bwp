import NOTIFICATION from "Redux/V1/Notification/ActionType";
import NotificationBusiness from "Businesses/NotificationBusiness";
import ArrayCount from "Helpers/ArrayCount";

const NotificationListReducer = (
    state = {
        loading: false,
        success: false,
        notification_list: [],
        pagination: [],
        notification_count: 0,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case NOTIFICATION.NOTIFICATION_GET:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case NOTIFICATION.NOTIFICATION_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                notification_list: state.notification_list.concat(
                    action.response.notifications
                ),
                notification_count: ArrayCount.count(
                    NotificationBusiness.notificationFilter(
                        action.response.notifications
                    )
                ),
                pagination: action.response.pagination,
                success: true,
                err_mess: null,
            };
        case NOTIFICATION.NOTIFICATION_GET_FAILED:
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

export default NotificationListReducer;
