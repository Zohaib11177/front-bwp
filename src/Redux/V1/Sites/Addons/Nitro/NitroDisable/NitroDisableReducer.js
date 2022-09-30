import NITRO from "Redux/V1/Sites/Addons/Nitro/ActionType";

const NitroDisableReducer = (
    state = {
        loading: false,
        success: false,
        nitro_disable: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case NITRO.NITRO_DISABLE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                nitro_disable: {},
            };
        case NITRO.NITRO_DISABLE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                nitro_disable: action.response,
                err_mess: null,
            };
        case NITRO.NITRO_DISABLE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                nitro_disable: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default NitroDisableReducer;
