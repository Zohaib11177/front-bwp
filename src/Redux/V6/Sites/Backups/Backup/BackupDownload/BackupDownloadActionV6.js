import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";

const backupDownload = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_V6,
        request: data,
    };
};
const backupDownloadSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_SUCCESS_V6,
        response: data,
    };
};

const backupDownloadFailed = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_FAILED_V6,
        response: data,
    };
};

const BackupDownloadActionV6 = {
    backupDownload,
    backupDownloadSuccess,
    backupDownloadFailed,
};
export default BackupDownloadActionV6;
