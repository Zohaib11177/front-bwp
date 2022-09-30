import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";

const backupRestore = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_V6,
        request: data,
    };
};
const backupRestoreSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_SUCCESS_V6,
        response: data,
    };
};

const backupRestoreFailed = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_FAILED_V6,
        response: data,
    };
};

const BackupRestoreActionV6 = {
    backupRestore,
    backupRestoreSuccess,
    backupRestoreFailed,
};
export default BackupRestoreActionV6;
