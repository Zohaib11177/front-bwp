import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const SiteDbLoginReducerV6 = (
    state = {
        loading: false,
        success: false,
        wordpress_login: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_LOGIN_V6:
            return {
                ...state,
                loading: true,
                success: false,
                wordpress_login: {},
                err_mess: null,
            };
        case SITE.SITE_LOGIN_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                wordpress_login: action.response.data,
            };
        case SITE.SITE_LOGIN_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                wordpress_login: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteDbLoginReducerV6;
