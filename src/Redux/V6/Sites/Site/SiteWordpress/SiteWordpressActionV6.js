import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteWordpress = (data) => {
    return {
        type: SITE.SITE_WORDPRESS_V6,
        request: data,
    };
};
const siteWordpressSuccess = (data) => {
    return {
        type: SITE.SITE_WORDPRESS_V6_SUCCESS,
        response: data,
    };
};
const siteWordpressFailed = (data) => {
    return {
        type: SITE.SITE_WORDPRESS_V6_FAILED,
        response: data,
    };
};

const SiteWordpressActionV6 = {
    siteWordpress,
    siteWordpressSuccess,
    siteWordpressFailed,
};
export default SiteWordpressActionV6;
