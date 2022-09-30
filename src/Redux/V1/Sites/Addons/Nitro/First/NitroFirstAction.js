import NITRO from "Redux/V1/Sites/Addons/Nitro/ActionType";

const nitroFirst = (data) => {
    return {
        type: NITRO.NITRO_FIRST,
        request: data,
    };
};
const nitroFirstSuccess = (data) => {
    return {
        type: NITRO.NITRO_FIRST_SUCCESS,
        response: data,
    };
};
const nitroFirstFailed = (data) => {
    return {
        type: NITRO.NITRO_FIRST_FAILED,
        response: data,
    };
};
const NitroDetailAction = {
    nitroFirst,
    nitroFirstSuccess,
    nitroFirstFailed,
};
export default NitroDetailAction;
