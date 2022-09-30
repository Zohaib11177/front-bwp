import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";

const backupGet = (data) => {
    return {
        type: BACKUP.BACKUP_GET_V6,
        request: data,
    };
};
const backupGetSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_GET_V6_SUCCESS,
        response: data,
    };
};

const backupGetFailed = (data) => {
    return {
        type: BACKUP.BACKUP_GET_V6_FAILED,
        response: data,
    };
};
const backupPostMergeSuccess = (data) => {
    return {
        type: BACKUP.BACKUP_MERGE,
        response: data,
    };
};

const BackupListActionV6 = {
    backupGet,
    backupGetSuccess,
    backupGetFailed,
    backupPostMergeSuccess,
};
export default BackupListActionV6;
