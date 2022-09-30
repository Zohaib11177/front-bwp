import SETTINGS from "Redux/V1/Settings/ActionType";

const whiteLabelGet = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_GET,
        request: data,
    };
};
const whiteLabelGetSuccess = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_GET_SUCCESS,
        response: data,
    };
};
const whiteLabelGetFailed = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_GET_FAILED,
        response: data,
    };
};

const WhiteLabelDetailAction = {
    whiteLabelGet,
    whiteLabelGetSuccess,
    whiteLabelGetFailed,
};

export default WhiteLabelDetailAction;
