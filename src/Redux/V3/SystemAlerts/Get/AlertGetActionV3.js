import ALERT from "Redux/V3/SystemAlerts/AlertRootActionTypeV3";

const alertGet = () => {
    return {
        type: ALERT.ALERT_GET_V3,
    };
};
const alertGetSuccess = (data) => {
    return {
        type: ALERT.ALERT_GET_SUCCESS_V3,
        response: data,
    };
};
const alertGetFailed = (data) => {
    return {
        type: ALERT.ALERT_GET_FAILED_V3,
        response: data,
    };
};

const AlertListActionV3 = {
    alertGet,
    alertGetSuccess,
    alertGetFailed,
};

export default AlertListActionV3;
