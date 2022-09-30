import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteResourceReducerV6 = (
    state = {
        loading: false,
        success: false,
        resources: {
            bandwidth: {},
            disk: {},
            visitor: {},
        },
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_RESOURCE_V6:
            return {
                ...state,
                loading: true,
                success: false,
                resources: {
                    bandwidth: {},
                    disk: {},
                    visitor: {},
                },
                err_mess: null,
            };
        case SITE.SITE_RESOURCE_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                resources: action.response.resources,
            };
        case SITE.SITE_RESOURCE_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                resource: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteResourceReducerV6;
