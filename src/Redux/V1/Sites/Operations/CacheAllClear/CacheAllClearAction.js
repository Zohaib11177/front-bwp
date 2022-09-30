import OPERATION from "Redux/V1/Sites/Operations/ActionType";

const cacheAllClear = (data) => {
    return {
        type: OPERATION.CACHE_ALL_CLEAR,
        request: data,
    };
};
const cacheAllClearSuccess = (data) => {
    return {
        type: OPERATION.CACHE_ALL_CLEAR_SUCCESS,
        response: data,
    };
};
const cacheAllClearFailed = (data) => {
    return {
        type: OPERATION.CACHE_ALL_CLEAR_FAILED,
        response: data,
    };
};
const CacheAllClearAction = {
    cacheAllClear,
    cacheAllClearSuccess,
    cacheAllClearFailed,
};
export default CacheAllClearAction;
