import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const CdnEnableReducer = (
    state = {
        loading: false,
        success: false,
        cdn_enable: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_ENABLE:
            return {
                ...state,
                loading: true,
                success: false,
                cdn_enable: [],
                err_mess: null,
            };
        case CDN.CDN_ENABLE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                cdn_enable: action.response,
                err_mess: null,
            };
        case CDN.CDN_ENABLE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                cdn_enable: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default CdnEnableReducer;
