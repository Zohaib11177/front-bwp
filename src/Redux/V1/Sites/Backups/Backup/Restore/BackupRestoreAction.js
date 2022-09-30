import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";

const backupRestore = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE,
        request: data,
    };
};
const backupRestoreSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_SUCCESS,
        response: data,
    };
};

const backupRestoreFailed = (data) => {
    return {
        type: BACKUP.BACKUP_RESTORE_FAILED,
        response: data,
    };
};

const BackupCreateAction = {
    backupRestore,
    backupRestoreSuccess,
    backupRestoreFailed,
};
export default BackupCreateAction;
