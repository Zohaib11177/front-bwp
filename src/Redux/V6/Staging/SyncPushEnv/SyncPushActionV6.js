import STAGING from "Redux/V6/Staging/ActionTypeV6";

const syncPushPut = (data) => {
    return {
        type: STAGING.SYNC_PUSH_LIVE_V6,
        request: data,
    };
};
const syncPushSuccess = (data) => {
    return {
        type: STAGING.SYNC_PUSH_LIVE_V6_SUCCESS,
        response: data,
    };
};
const syncPushFailed = (data) => {
    return {
        type: STAGING.SYNC_PUSH_LIVE_V6_FAILED,
        response: data,
    };
};
const SyncPushActionV6 = {
    syncPushPut,
    syncPushSuccess,
    syncPushFailed,
};
export default SyncPushActionV6;
