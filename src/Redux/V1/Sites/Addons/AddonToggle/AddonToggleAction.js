import ADDON from "Redux/V1/Sites/Addons/ActionType";

const addonToggle = (data) => {
    return {
        type: ADDON.ADDON_TOGGLE,
        request: data,
    };
};

const addonToggleSuccess = (data) => {
    return {
        type: ADDON.ADDON_TOGGLE_SUCCESS,
        response: data,
    };
};

const addonToggleFailed = (data) => {
    return {
        type: ADDON.ADDON_TOGGLE_FAILED,
        response: data,
    };
};

const AddonToggleAction = {
    addonToggle,
    addonToggleSuccess,
    addonToggleFailed,
};

export default AddonToggleAction;
