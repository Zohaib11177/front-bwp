import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";

const backupDownload = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD,
        request: data,
    };
};
const backupDownloadSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_SUCCESS,
        response: data,
    };
};

const backupDownloadFailed = (data) => {
    return {
        type: BACKUP.BACKUP_DOWNLOAD_FAILED,
        response: data,
    };
};

const BackupDownloadAction = {
    backupDownload,
    backupDownloadSuccess,
    backupDownloadFailed,
};
export default BackupDownloadAction;
