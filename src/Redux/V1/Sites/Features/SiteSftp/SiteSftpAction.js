import FEATURE from 'Redux/V1/Sites/Features/ActionType';

const siteSftp = (data) => {
    return {
        type: FEATURE.SITE_SFTP,
        request: data,
    };
};
const siteSftpSuccess = (data) => {
    return {
        type: FEATURE.SITE_SFTP_SUCCESS,
        response: data,
    };
};
const siteSftpFailed = (data) => {
    return {
        type: FEATURE.SITE_SFTP_FAILED,
        response: data,
    };
};

const SiteSftpAction = {
    siteSftp,
    siteSftpSuccess,
    siteSftpFailed,
};
export default SiteSftpAction;
