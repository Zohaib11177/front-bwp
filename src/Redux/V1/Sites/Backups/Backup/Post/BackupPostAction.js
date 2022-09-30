import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";

const backupPost = (data) => {
    return {
        type: BACKUP.BACKUP_POST,
        request: data,
    };
};
const backupPostSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_POST_SUCCESS,
        response: data,
    };
};

const backupPostFailed = (data) => {
    return {
        type: BACKUP.BACKUP_POST_FAILED,
        response: data,
    };
};

const BackupCreateAction = {
    backupPost,
    backupPostSuccess,
    backupPostFailed,
};
export default BackupCreateAction;
