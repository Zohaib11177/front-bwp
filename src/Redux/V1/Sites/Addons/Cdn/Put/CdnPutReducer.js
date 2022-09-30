import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const CdnUpdateReducer = (
    state = {
        loading: false,
        success: false,
        cdn_update: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                cdn_update: {},
            };
        case CDN.CDN_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                cdn_update: action.response,
            };
        case CDN.CDN_PUT_FAILED:
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

export default CdnUpdateReducer;
