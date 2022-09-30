import ADDON from "Redux/V6/Sites/Addons/ActionTypeV6";

const UnlimitedEditsReducerV6 = (
    state = {
        loading: false,
        success: false,
        addon: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case ADDON.UNLIMITED_EDITS_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                addon: [],
            };
        case ADDON.UNLIMITED_EDITS_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                addon: action.response,
                success: true,
                err_mess: null,
            };
        case ADDON.UNLIMITED_EDITS_V6_FAILED:
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

export default UnlimitedEditsReducerV6;
