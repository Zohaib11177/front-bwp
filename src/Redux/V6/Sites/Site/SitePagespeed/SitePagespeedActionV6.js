import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const sitePagespeed = (data) => {
    return {
        type: SITE.SITE_PAGESPEED_V6,
        request: data,
    };
};
const sitePagespeedSuccess = (data) => {
    return {
        type: SITE.SITE_PAGESPEED_V6_SUCCESS,
        response: data,
    };
};
const sitePagespeedFailed = (data) => {
    return {
        type: SITE.SITE_PAGESPEED_V6_FAILED,
        response: data,
    };
};

const SitePagespeedActionV6 = {
    sitePagespeed,
    sitePagespeedSuccess,
    sitePagespeedFailed,
};
export default SitePagespeedActionV6;
