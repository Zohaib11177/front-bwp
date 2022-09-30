import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const cdnCache = (data) => {
    return {
        type: CDN.CDN_CACHE,
        request: data,
    };
};
const cdnCacheSuccess = (data) => {
    return {
        type: CDN.CDN_CACHE_SUCCESS,
        response: data,
    };
};
const cdnCacheFailed = (data) => {
    return {
        type: CDN.CDN_CACHE_FAILED,
        response: data,
    };
};

const CdnCacheAction = {
    cdnCache,
    cdnCacheSuccess,
    cdnCacheFailed,
};
export default CdnCacheAction;
