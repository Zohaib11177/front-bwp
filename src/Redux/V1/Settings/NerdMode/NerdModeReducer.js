import SETTINGS from "Redux/V1/Settings/ActionType";

const NerdModeReducer = (
    state = {
        loading: false,
        nerd_mode: [],
        err_mess: "",
        success: false,
    },
    action
) => {
    switch (action.type) {
        case SETTINGS.NERD_MODE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: true,
            };
        case SETTINGS.NERD_MODE_SUCCESS:
            return {
                ...state,
                loading: true,
                nerd_mode: action.response.permissions,
                success: false,
            };
        case SETTINGS.NERD_MODE_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default NerdModeReducer;
