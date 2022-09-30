import ADDON from "Redux/V1/Sites/Addons/ActionType";

const AddonListReducer = (
    state = {
        loading: false,
        success: false,
        addon_list: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case ADDON.ADDON_GET:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
            };
        case ADDON.ADDON_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                addon_list: action.response.addons,
                success: true,
                err_mess: null,
            };
        case ADDON.ADDON_GET_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                addon_list: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default AddonListReducer;
