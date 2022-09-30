import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";

const backupGet = (data) => {
    return {
        type: BACKUP.BACKUP_GET,
        request: data,
    };
};
const backupGetSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_GET_SUCCESS,
        response: data,
    };
};

const backupGetFailed = (data) => {
    return {
        type: BACKUP.BACKUP_GET_FAILED,
        response: data,
    };
};
const backupPostMergeSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_MERGE,
        response: data,
    };
};

const BackupListAction = {
    backupGet,
    backupGetSuccess,
    backupGetFailed,
    backupPostMergeSuccess,
};
export default BackupListAction;
