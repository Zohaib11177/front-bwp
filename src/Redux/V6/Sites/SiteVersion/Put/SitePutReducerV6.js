import SITE from "Redux/V6/Sites/SiteVersion/ActionTypeV6";

const SiteVersionReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case SITE.SITE_VERSION_PUT_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case SITE.SITE_VERSION_PUT_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case SITE.SITE_VERSION_PUT_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SiteVersionReducerV6;
