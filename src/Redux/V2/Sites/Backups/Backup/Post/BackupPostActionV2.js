import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";

const backupPost = (data) => {
    return {
        type: BACKUP.BACKUP_POST_V2,
        request: data,
    };
};
const backupPostSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_POST_SUCCESS_V2,
        response: data,
    };
};

const backupPostFailed = (data) => {
    return {
        type: BACKUP.BACKUP_POST_FAILED_V2,
        response: data,
    };
};

const BackupCreateActionV2 = {
    backupPost,
    backupPostSuccess,
    backupPostFailed,
};
export default BackupCreateActionV2;
