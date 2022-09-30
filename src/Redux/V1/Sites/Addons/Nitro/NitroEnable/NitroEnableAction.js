import NITRO from "Redux/V1/Sites/Addons/Nitro/ActionType";

const nitroEnable = (data) => {
    return {
        type: NITRO.NITRO_ENABLE,
        request: data,
    };
};
const nitroEnableSuccess = (data) => {
    return {
        type: NITRO.NITRO_ENABLE_SUCCESS,
        response: data,
    };
};
const nitroEnableFailed = (data) => {
    return {
        type: NITRO.NITRO_ENABLE_FAILED,
        response: data,
    };
};
const NitroEnableAction = {
    nitroEnable,
    nitroEnableSuccess,
    nitroEnableFailed,
};
export default NitroEnableAction;
