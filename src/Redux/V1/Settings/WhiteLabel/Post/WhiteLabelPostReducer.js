import SETTINGS from "Redux/V1/Settings/ActionType";

const WhiteLabelCreateReducer = (
    state = {
        loading: false,
        white_label: [],
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SETTINGS.WHITE_LABEL_POST:
            return {
                ...state,
                loading: true,
                err_mess: null,
                white_label: [],
                success: false,
            };
        case SETTINGS.WHITE_LABEL_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                white_label: action.response,
                success: true,
                err_mess: null,
            };
        case SETTINGS.WHITE_LABEL_POST_FAILED:
            return {
                ...state,
                loading: false,
                white_label: [],
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WhiteLabelCreateReducer;
