import NITRO from "Redux/V1/Sites/Addons/Nitro/ActionType";

const NitroEnableReducer = (
    state = {
        loading: false,
        success: false,
        nitro_enable: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case NITRO.NITRO_ENABLE:
            return {
                ...state,
                loading: true,
                success: false,
                nitro_enable: {},
                err_mess: null,
            };
        case NITRO.NITRO_ENABLE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                nitro_enable: action.response,
                err_mess: null,
            };
        case NITRO.NITRO_ENABLE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                nitro_enable: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default NitroEnableReducer;
