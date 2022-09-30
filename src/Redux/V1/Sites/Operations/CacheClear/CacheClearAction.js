import OPERATION from "Redux/V1/Sites/Operations/ActionType";

function cacheClear(data) {
    return {
        type: OPERATION.CACHE_CLEAR,
        request: data,
    };
}
function cacheClearSuccess(data) {
    return {
        type: OPERATION.CACHE_CLEAR_SUCCESS,
        response: data,
    };
}
function cacheClearFailed(data) {
    return {
        type: OPERATION.CACHE_CLEAR_FAILED,
        response: data,
    };
}
const CacheClearAction = {
    cacheClear,
    cacheClearSuccess,
    cacheClearFailed,
};
export default CacheClearAction;
