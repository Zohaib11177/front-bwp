import SITE from "Redux/V1/Sites/Site/ActionType";

const SiteCloudProviderListReducer = (
    state = {
        loading: false,
        success: false,
        provider: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_CLOUD_PROVIDER:
            return {
                ...state,
                loading: true,
                success: false,
                provider: [],
                err_mess: null,
            };
        case SITE.SITE_CLOUD_PROVIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                provider: action.response.cloud_providers,
            };
        case SITE.SITE_CLOUD_PROVIDER_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                provider: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteCloudProviderListReducer;
