import FEATURE from "Redux/V1/Sites/Features/ActionType";

const SiteSftpReducer = (
    state = {
        loading: false,
        success: false,
        sftp: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case FEATURE.SITE_SFTP:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                sftp: {},
            };
        case FEATURE.SITE_SFTP_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
                sftp: action.response,
            };
        case FEATURE.SITE_SFTP_FAILED:
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

export default SiteSftpReducer;
// state.site_detail.sftps = action.response;
// state.site_detail.sftp_generated = true;
