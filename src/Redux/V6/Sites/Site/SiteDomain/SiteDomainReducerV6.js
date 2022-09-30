import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteDomainReducerV6 = (
    state = {
        loading: false,
        domain: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_DOMAIN_V6:
            return {
                ...state,
                loading: true,
                success: false,
                err_mess: null,
            };
        case SITE.SITE_DOMAIN_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                err_mess: null,
                success: true,
            };
        case SITE.SITE_DOMAIN_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteDomainReducerV6;
