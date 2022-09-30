import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const RefreshPagespeedReducerV6 = (
    state = {
        loading: false,
        success: false,
        page_speed: {
            desktop: {},
            mobile: {},
        },
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.REFRESH_PAGESPEED_V6:
            return {
                ...state,
                loading: true,
                success: false,
                page_speed: {
                    desktop: {},
                    mobile: {},
                },
                err_mess: null,
            };
        case SITE.REFRESH_PAGESPEED_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                page_speed: action.response.page_speed,
            };
        case SITE.REFRESH_PAGESPEED_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                wp_core: {},
                wp_plugin: [],
                wp_themes: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default RefreshPagespeedReducerV6;
