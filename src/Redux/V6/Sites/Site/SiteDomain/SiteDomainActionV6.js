import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const siteDomain = (data) => {
    return {
        type: SITE.SITE_DOMAIN_V6,
        request: data,
    };
};

const siteDomainSuccess = (data) => {
    return { type: SITE.SITE_DOMAIN_V6_SUCCESS, response: data };
};
const siteDomainFailed = (data) => {
    return { type: SITE.SITE_DOMAIN_V6_FAILED, response: data };
};

const SiteDomainActionV6 = {
    siteDomain,
    siteDomainSuccess,
    siteDomainFailed,
};

export default SiteDomainActionV6;
