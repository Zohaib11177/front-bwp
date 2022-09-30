import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";

const SiteWLGetReducerV6 = (
    state = {
        loading: false,
        success: false,
        white_label : {}
    },
    action
) => {
    switch (action.type) {
        case SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                white_label : action.response.White_label
            };
        case SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6_FAILED:
            return { ...state, loading: false  };
        default:
            return state;
    }
};

export default SiteWLGetReducerV6;
