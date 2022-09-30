import FEATURE from "Redux/V1/Sites/Features/ActionType";

const siteScreenshot = (data) => {
    return {
        type: FEATURE.SITE_SCREENSHOT,
        request: data,
    };
};
const siteScreenshotSuccess = (data) => {
    return {
        type: FEATURE.SITE_SCREENSHOT_SUCCESS,
        response: data,
    };
};
const siteScreenshotFailed = (data) => {
    return {
        type: FEATURE.SITE_SCREENSHOT_FAILED,
        response: data,
    };
};

const SiteScreenshotAction = {
    siteScreenshot,
    siteScreenshotSuccess,
    siteScreenshotFailed,
};
export default SiteScreenshotAction;
