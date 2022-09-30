import SITE from "Redux/V1/Sites/Site/ActionType";

const siteCloudProvider = (data) => {
    return {
        type: SITE.SITE_CLOUD_PROVIDER,
        request: data,
    };
};
const siteCloudProviderSuccess = (data) => {
    return {
        type: SITE.SITE_CLOUD_PROVIDER_SUCCESS,
        response: data,
    };
};
const siteCloudProviderFailed = (data) => {
    return {
        type: SITE.SITE_CLOUD_PROVIDER_FAILED,
        response: data,
    };
};

const SiteCloudProviderListAction = {
    siteCloudProvider,
    siteCloudProviderSuccess,
    siteCloudProviderFailed,
};
export default SiteCloudProviderListAction;
