import FEATURE from "Redux/V1/Sites/Features/ActionType";

const pluginReset = (data) => {
    return {
        type: FEATURE.PLUGIN_RESET,
        request: data,
    };
};
const pluginResetSuccess = (data) => {
    return {
        type: FEATURE.PLUGIN_RESET_SUCCESS,
        response: data,
    };
};
const pluginResetFailed = (data) => {
    return {
        type: FEATURE.PLUGIN_RESET_FAILED,
        response: data,
    };
};

const PluginResetAction = {
    pluginReset,
    pluginResetSuccess,
    pluginResetFailed,
};
export default PluginResetAction;
