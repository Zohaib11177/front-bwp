import NITRO from "Redux/V1/Sites/Addons/Nitro/ActionType";

const nitroDisable = (data) => {
    return {
        type: NITRO.NITRO_DISABLE,
        request: data,
    };
};
const nitroDisableSuccess = (data) => {
    return {
        type: NITRO.NITRO_DISABLE_SUCCESS,
        response: data,
    };
};
const nitroDisableFailed = (data) => {
    return {
        type: NITRO.NITRO_DISABLE_FAILED,
        response: data,
    };
};
const NitroDisableAction = {
    nitroDisable,
    nitroDisableSuccess,
    nitroDisableFailed,
};
export default NitroDisableAction;
