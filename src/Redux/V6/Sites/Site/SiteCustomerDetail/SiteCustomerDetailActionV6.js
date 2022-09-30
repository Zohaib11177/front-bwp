import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteCustomerDetail = (data) => {
    return {
        type: SITE.SITE_CUSTOMER_DETAIL_V6,
        request: data,
    };
};
const siteCustomerDetailSuccess = (data) => {
    return {
        type: SITE.SITE_CUSTOMER_DETAIL_V6_SUCCESS,
        response: data,
    };
};
const siteCustomerDetailFailed = (data) => {
    return {
        type: SITE.SITE_CUSTOMER_DETAIL_V6_FAILED,
        response: data,
    };
};

const SiteCustomerDetailActionV6 = {
    siteCustomerDetail,
    siteCustomerDetailSuccess,
    siteCustomerDetailFailed,
};
export default SiteCustomerDetailActionV6;
