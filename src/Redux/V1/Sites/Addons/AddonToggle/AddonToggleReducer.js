import ADDON from "Redux/V1/Sites/Addons/ActionType";

const AddonToggleReducer = (
    state = {
        loading: false,
        success: false,
        addon: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case ADDON.ADDON_TOGGLE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                addon: [],
            };
        case ADDON.ADDON_TOGGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                addon: action.response,
                success: true,
                err_mess: null,
            };
        case ADDON.ADDON_TOGGLE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                addon: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default AddonToggleReducer;
