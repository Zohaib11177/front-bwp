import STAGING from "Redux/V1/Staging/ActionType";

const syncPut = (data) => {
    return {
        type: STAGING.SYNC_PUT,
        request: data,
    };
};
const syncPutSuccess = (data) => {
    return {
        type: STAGING.SYNC_PUT_SUCCESS,
        response: data,
    };
};
const syncPutFailed = (data) => {
    return {
        type: STAGING.SYNC_PUT_FAILED,
        response: data,
    };
};
const SyncPutAction = {
    syncPut,
    syncPutSuccess,
    syncPutFailed,
};
export default SyncPutAction;
