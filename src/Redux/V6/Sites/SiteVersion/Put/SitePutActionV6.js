import SITE from "Redux/V6/Sites/SiteVersion/ActionTypeV6";

const sitePut = (data) => {
    return {
        type: SITE.SITE_VERSION_PUT_V6,
        request: data,
    };
};
const sitePutSuccess = (data) => {
    return {
        type: SITE.SITE_VERSION_PUT_V6_SUCCESS,
        response: data,
    };
};
const sitePutFailed = (data) => {
    return {
        type: SITE.SITE_VERSION_PUT_V6_FAILED,
        response: data,
    };
};

const SiteVersionActionV6 = {
    sitePut,
    sitePutSuccess,
    sitePutFailed,
};
export default SiteVersionActionV6;
