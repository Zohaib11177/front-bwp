import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";

const backupRestore = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_V2,
        request: data,
    };
};
const backupRestoreSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_SUCCESS_V2,
        response: data,
    };
};
const backupRestoreFailed = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_FAILED_V2,
        response: data,
    };
};

const BackupRestoreActionV2 = {
    backupRestore,
    backupRestoreSuccess,
    backupRestoreFailed,
};
export default BackupRestoreActionV2;
