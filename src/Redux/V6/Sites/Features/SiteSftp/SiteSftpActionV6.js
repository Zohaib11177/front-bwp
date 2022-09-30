import FEATURE from "Redux/V6/Sites/Features/ActionTypeV6";

const siteSftp = (data) => {
    return {
        type: FEATURE.SITE_SFTP_V6,
        request: data,
    };
};
const siteSftpSuccess = (data) => {
    return {
        type: FEATURE.SITE_SFTP_V6_SUCCESS,
        response: data,
    };
};
const siteSftpFailed = (data) => {
    return {
        type: FEATURE.SITE_SFTP_V6_FAILED,
        response: data,
    };
};

const SiteSftpActionV6 = {
    siteSftp,
    siteSftpSuccess,
    siteSftpFailed,
};
export default SiteSftpActionV6;
