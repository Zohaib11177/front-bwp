import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const CdnDetailReducer = (
    state = {
        loading: false,
        success: false,
        cdn_details: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_FIRST:
            return {
                ...state,
                loading: true,
                success: false,
                cdn_details: {},
                err_mess: null,
            };
        case CDN.CDN_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                cdn_details: action.response.cdn,
                err_mess: null,
            };
        case CDN.CDN_FIRST_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                cdn_details: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default CdnDetailReducer;
