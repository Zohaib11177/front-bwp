import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteDetail = (data) => {
    return {
        type: SITE.SITE_DETAIL_V6,
        request: data,
    };
};

const siteDetailSuccess = (data) => {
    return {
        type: SITE.SITE_DETAIL_V6_SUCCESS,
        response: data,
    };
};

const siteDetailFailed = (data) => {
    return {
        type: SITE.SITE_DETAIL_V6_FAILED,
        response: data,
    };
};

const SiteDetailActionV6 = {
    siteDetail,
    siteDetailSuccess,
    siteDetailFailed,
};

export default SiteDetailActionV6;
