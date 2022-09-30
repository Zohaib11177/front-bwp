import ALERT from "Redux/V3/SystemAlerts/AlertRootActionTypeV3";

const AlertListReducerV3 = (
    state = {
        loading: false,
        success: false,
        message: localStorage.getItem("alert_message"),
        status: localStorage.getItem("alert_status"),
    },
    action
) => {
    switch (action.type) {
        case ALERT.ALERT_GET_V3:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ALERT.ALERT_GET_SUCCESS_V3:
            return {
                ...state,
                loading: false,
                status: action.response.system_alert.status,
                message: action.response.system_alert.message,
            };
        case ALERT.ALERT_GET_FAILED_V3:
            return {
                ...state,
                loading: false,
                error: action.response,
            };
        default:
            return state;
    }
};
export default AlertListReducerV3;
