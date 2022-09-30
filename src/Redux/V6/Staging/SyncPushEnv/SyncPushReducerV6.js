import STAGING from "Redux/V6/Staging/ActionTypeV6";

const SyncPushReducerV6 = (
    state = {
        loading: false,
        staging: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case STAGING.SYNC_PUSH_LIVE_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case STAGING.SYNC_PUSH_LIVE_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                staging: action.response,
            };
        case STAGING.SYNC_PUSH_LIVE_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SyncPushReducerV6;
