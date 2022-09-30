import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";

const SiteSftpReducerV6 = (
    state = {
        loading: false,
        success: false,
        sftp: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.SITE_SFTP_V6:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                sftp: {},
            };
        case FEATURE.SITE_SFTP_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                sftp: action.response,
            };
        case FEATURE.SITE_SFTP_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                sftp: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SiteSftpReducerV6;
// state.site_detail.sftps = action.response;
// state.site_detail.sftp_generated = true;
