import STAGING from "Redux/V1/Staging/ActionType";

const SyncPushReducer = (
    state = {
        loading: false,
        staging: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case STAGING.SYNC_PUSH_LIVE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case STAGING.SYNC_PUSH_LIVE_SUCCESS:
            return {
                ...state,
                loading: false,
                staging: action.response,
            };
        case STAGING.SYNC_PUSH_LIVE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SyncPushReducer;
