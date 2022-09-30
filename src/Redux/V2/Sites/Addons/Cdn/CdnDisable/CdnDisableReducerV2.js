import CDN from "Redux/V2/Sites/Addons/Cdn/ActionTypeV2";

const CdnDisableReducerV2 = (
    state = {
        loading: false,
        success: false,
        cdn_disable: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_DISABLE_V2:
            return {
                ...state,
                loading: true,
                err_mess: null,
                cdn_disable: [],
                success: false,
            };
        case CDN.CDN_DISABLE_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                cdn_disable: action.response,
                err_mess: null,
            };
        case CDN.CDN_DISABLE_FAILED_V2:
            return {
                ...state,
                loading: false,
                cdn_disable: [],
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default CdnDisableReducerV2;
