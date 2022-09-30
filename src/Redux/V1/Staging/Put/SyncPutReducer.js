import STAGING from "Redux/V1/Staging/ActionType";

const SyncPutReducer = (
    state = {
        loading: false,
        staging: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case STAGING.SYNC_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case STAGING.SYNC_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                staging: action.response,
            };
        case STAGING.SYNC_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SyncPutReducer;
