import FEATURE from "Redux/V1/Sites/Features/ActionType";

const SiteScreenshotReducer = (
    state = {
        loading: false,
        success: false,
        site_screenshot: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.SITE_SCREENSHOT:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                site_screenshot: {},
            };
        case FEATURE.SITE_SCREENSHOT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                site_screenshot: action.response.screenshot_put,
                err_mess: null,
            };
        case FEATURE.SITE_SCREENSHOT_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                site_screenshot: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteScreenshotReducer;
