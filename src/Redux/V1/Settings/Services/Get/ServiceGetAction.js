import SETTINGS from "Redux/V1/Settings/ActionType";

const serviceGet = (data) => {
    return {
        type: SETTINGS.SERVICE_GET,
        request: data,
    };
};
const serviceGetSuccess = (data) => {
    return {
        type: SETTINGS.SERVICE_GET_SUCCESS,
        response: data,
    };
};
const serviceGetFailed = (data) => {
    return {
        type: SETTINGS.SERVICE_GET_FAILED,
        response: data,
    };
};

const ServiceListAction = {
    serviceGet,
    serviceGetSuccess,
    serviceGetFailed,
};

export default ServiceListAction;
