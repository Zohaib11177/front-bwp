import NITRO from "Redux/V1/Sites/Addons/Nitro/ActionType";

const NitroDetailReducer = (
    state = {
        loading: false,
        success: false,
        nitro_detail: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case NITRO.NITRO_FIRST:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                nitro_detail: [],
            };
        case NITRO.NITRO_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                nitro_detail: action.response.nitro,
                err_mess: null,
            };
        case NITRO.NITRO_FIRST_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                nitro_detail: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default NitroDetailReducer;
