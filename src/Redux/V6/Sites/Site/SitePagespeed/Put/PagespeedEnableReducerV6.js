import PAGESPEED from "Redux/V6/Sites/Site/ActionTypeV6";

const PagespeedEnableReducerV6 = (
    state = {
        loading: false,
        success: false,
        nitro_enable: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case PAGESPEED.PAGESPEED_ENABLE_V6:
            return {
                ...state,
                loading: true,
                success: false,
                nitro_enable: {},
                err_mess: null,
            };
        case PAGESPEED.PAGESPEED_ENABLE_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                nitro_enable: action.response,
                err_mess: null,
            };
        case PAGESPEED.PAGESPEED_ENABLE_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                nitro_enable: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default PagespeedEnableReducerV6;
