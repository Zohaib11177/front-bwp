import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";

const SiteWLPostReducerV6 = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case SITE_WHITE_LABEL.SITE_WHITE_LABEL_POST_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case SITE_WHITE_LABEL.SITE_WHITE_LABEL_POST_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case SITE_WHITE_LABEL.SITE_WHITE_LABEL_POST_V6_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default SiteWLPostReducerV6;
