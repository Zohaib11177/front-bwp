import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";

const backupDownload = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_V2,
        request: data,
    };
};
const backupDownloadSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_SUCCESS_V2,
        response: data,
    };
};

const backupDownloadFailed = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_FAILED_V2,
        response: data,
    };
};

const BackupDownloadActionV2 = {
    backupDownload,
    backupDownloadSuccess,
    backupDownloadFailed,
};
export default BackupDownloadActionV2;
