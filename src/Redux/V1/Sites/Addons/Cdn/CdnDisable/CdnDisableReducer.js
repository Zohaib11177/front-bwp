import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";

const CdnDisableReducer = (
    state = {
        loading: false,
        success: false,
        cdn_disable: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CDN.CDN_DISABLE:
            return {
                ...state,
                loading: true,
                err_mess: null,
                cdn_disable: [],
                success: false,
            };
        case CDN.CDN_DISABLE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                cdn_disable: action.response,
                err_mess: null,
            };
        case CDN.CDN_DISABLE_FAILED:
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

export default CdnDisableReducer;
