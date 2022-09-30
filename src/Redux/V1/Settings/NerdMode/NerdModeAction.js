import SETTINGS from "Redux/V1/Settings/ActionType";

const nerdMode = (data) => {
    return {
        type: SETTINGS.NERD_MODE,
        request: data,
    };
};

const nerdModeSuccess = (data) => {
    return {
        type: SETTINGS.NERD_MODE_SUCCESS,
        response: data,
    };
};
const nerdModeFailed = (data) => {
    return {
        type: SETTINGS.NERD_MODE_FAILED,
        response: data,
    };
};

const NerdModeAction = {
    nerdMode,
    nerdModeSuccess,
    nerdModeFailed,
};

export default NerdModeAction;
