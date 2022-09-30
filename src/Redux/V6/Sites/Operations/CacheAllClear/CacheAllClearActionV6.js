import OPERATION from "Redux/V6/Sites/Operations/ActionTypeV6";

const cacheAllClear = (data) => {
    return {
        type: OPERATION.CACHE_ALL_CLEAR_V6,
        request: data,
    };
};
const cacheAllClearSuccess = (data) => {
    return {
        type: OPERATION.CACHE_ALL_CLEAR_V6_SUCCESS,
        response: data,
    };
};
const cacheAllClearFailed = (data) => {
    return {
        type: OPERATION.CACHE_ALL_CLEAR_V6_FAILED,
        response: data,
    };
};
const CacheAllClearActionV6 = {
    cacheAllClear,
    cacheAllClearSuccess,
    cacheAllClearFailed,
};
export default CacheAllClearActionV6;
