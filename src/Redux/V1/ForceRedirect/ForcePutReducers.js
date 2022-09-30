import FORCE from "Redux/V1/ForceRedirect/ActionTypes";

const ForceRedirectReducer = (
    state = {
        loading: false,
        success: false,
        force: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case FORCE.FORCE_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case FORCE.FORCE_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                force: action.response,
            };
        case FORCE.FORCE_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default ForceRedirectReducer;
