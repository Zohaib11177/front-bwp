import FEATURE from "Redux/V1/Sites/Features/ActionType";

const PluginResetReducer = (
    state = {
        loading: false,
        success: false,
        plugin_key: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.PLUGIN_RESET:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                plugin_key: {},
            };
        case FEATURE.PLUGIN_RESET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                plugin_key: action.response.token.code,
            };
        case FEATURE.PLUGIN_RESET_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                plugin_key: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default PluginResetReducer;
