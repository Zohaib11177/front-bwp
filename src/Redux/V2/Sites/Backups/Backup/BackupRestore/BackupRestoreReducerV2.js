import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";

const BackupRestoreReducerV2 = (
    state = {
        loading: false,
        success: false,
        backup_restore: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_RESTORE_V2:
            return {
                ...state,
                loading: true,
                success: false,
                backup_restore: [],
                err_mess: null,
            };
        case BACKUP.BACKUP_RESTORE_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                success: true,
                backup_restore: action.response,
                err_mess: null,
            };
        case BACKUP.BACKUP_RESTORE_FAILED_V2:
            return {
                ...state,
                loading: false,
                success: false,
                backup_restore: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default BackupRestoreReducerV2;
