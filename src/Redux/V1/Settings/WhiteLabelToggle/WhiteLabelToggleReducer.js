import SETTINGS from "Redux/V1/Settings/ActionType";

const WhiteLabelToggleReducer = (
    state = {
        loading: false,
        data: [],
    },
    action
) => {
    switch (action.type) {
        case SETTINGS.WHITE_LABEL_TOGGLE:
            return {
                ...state,
                loading: true,
            };
        case SETTINGS.WHITE_LABEL_TOGGLE_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case SETTINGS.WHITE_LABEL_TOGGLE_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default WhiteLabelToggleReducer;
