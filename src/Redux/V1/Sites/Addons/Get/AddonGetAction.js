import ADDON from "Redux/V1/Sites/Addons/ActionType";

const addonGet = (data) => {
    return {
        type: ADDON.ADDON_GET,
        request: data,
    };
};

const addonGetSuccess = (data) => {
    return {
        type: ADDON.ADDON_GET_SUCCESS,
        response: data,
    };
};

const addonGetFailed = (data) => {
    return {
        type: ADDON.ADDON_GET_FAILED,
        response: data,
    };
};

const AddonListAction = {
    addonGet,
    addonGetSuccess,
    addonGetFailed,
};

export default AddonListAction;
