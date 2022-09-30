import STAGING from "Redux/V1/Staging/ActionType";

const syncPushPut = (data) => {
    return {
        type: STAGING.SYNC_PUSH_LIVE,
        request: data,
    };
};
const syncPushSuccess = (data) => {
    return {
        type: STAGING.SYNC_PUSH_LIVE_SUCCESS,
        response: data,
    };
};
const syncPushFailed = (data) => {
    return {
        type: STAGING.SYNC_PUSH_LIVE_FAILED,
        response: data,
    };
};
const SyncPushAction = {
    syncPushPut,
    syncPushSuccess,
    syncPushFailed,
};
export default SyncPushAction;
