import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteWordpressReducerV6 = (
    state = {
        loading: false,
        success: false,
        wp_core: {},
        wp_plugin: [],
        wp_themes: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_WORDPRESS_V6:
            return {
                ...state,
                loading: true,
                success: false,
                wp_core: {},
                wp_plugin: [],
                wp_themes: [],
                err_mess: null,
            };
        case SITE.SITE_WORDPRESS_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                wp_core: action.response.wp_core,
                wp_plugin: action.response.wp_plugins,
                wp_themes: action.response.wp_themes,
            };
        case SITE.SITE_WORDPRESS_V6_FAILED:
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

export default SiteWordpressReducerV6;
