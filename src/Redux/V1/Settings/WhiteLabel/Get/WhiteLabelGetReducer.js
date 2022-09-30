import SETTINGS from "Redux/V1/Settings/ActionType";

const WhiteLabelDetailReducer = (
    state = {
        loading: false,
        whiteLabel: [],
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SETTINGS.WHITE_LABEL_GET:
            return {
                ...state,
                loading: true,
                whiteLabel: [],
                success: false,
                err_mess: null,
            };
        case SETTINGS.WHITE_LABEL_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                whiteLabel: action.response.White_label,
                success: true,
                err_mess: null,
            };
        case SETTINGS.WHITE_LABEL_GET_FAILED:
            return {
                ...state,
                loading: false,
                whiteLabel: [],
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default WhiteLabelDetailReducer;
