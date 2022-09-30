import SETTINGS from "Redux/V1/Settings/ActionType";

const whiteLabelToggle = () => {
    return {
        type: SETTINGS.WHITE_LABEL_TOGGLE,
    };
};
const whiteLabelToggleSuccess = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_TOGGLE_SUCCESS,
    };
};
const whiteLabelToggleFailed = (data) => {
    return {
        type: SETTINGS.WHITE_LABEL_TOGGLE_FAILED,
        response: data,
    };
};

const WhiteLabelToggleAction = {
    whiteLabelToggle,
    whiteLabelToggleSuccess,
    whiteLabelToggleFailed,
};

export default WhiteLabelToggleAction;
