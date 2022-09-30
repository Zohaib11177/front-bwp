import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const CdnCacheReducer = (
    state = {
        loading: false,
        success: false,
        cdn_cache: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_CACHE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                cdn_cache: {},
            };
        case CDN.CDN_CACHE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                cdn_cache: action.response,
                err_mess: null,
            };
        case CDN.CDN_CACHE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                cdn_cache: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default CdnCacheReducer;
