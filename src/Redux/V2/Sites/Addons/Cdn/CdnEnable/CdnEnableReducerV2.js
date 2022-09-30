import CDN from "Redux/V2/Sites/Addons/Cdn/ActionTypeV2";

const CdnEnableReducerV2 = (
    state = {
        loading: false,
        success: false,
        cdn_enable: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_ENABLE_V2:
            return {
                ...state,
                loading: true,
                success: false,
                cdn_enable: [],
                err_mess: null,
            };
        case CDN.CDN_ENABLE_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                cdn_enable: action.response,
                err_mess: null,
            };
        case CDN.CDN_ENABLE_FAILED_V2:
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

export default CdnEnableReducerV2;
