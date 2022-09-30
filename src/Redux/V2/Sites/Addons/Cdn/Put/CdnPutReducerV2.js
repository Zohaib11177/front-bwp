import CDN from "Redux/V2/Sites/Addons/Cdn/ActionTypeV2";

const CdnUpdateReducerV2 = (
    state = {
        loading: false,
        success: false,
        cdn_update: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_PUT_V2:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                cdn_update: {},
            };
        case CDN.CDN_PUT_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                cdn_update: action.response,
            };
        case CDN.CDN_PUT_FAILED_V2:
            return {
                ...state,
                loading: false,
                success: false,
                cdn_update: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default CdnUpdateReducerV2;
