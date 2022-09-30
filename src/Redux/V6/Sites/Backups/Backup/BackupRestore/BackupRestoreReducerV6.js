import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";

const BackupRestoreReducerV6 = (
    state = {
        loading: false,
        success: false,
        backup_restore: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_RESTORE_V6:
            return {
                ...state,
                loading: true,
                success: false,
                backup_restore: [],
                err_mess: null,
            };
        case BACKUP.BACKUP_RESTORE_SUCCESS_V6:
            return {
                ...state,
                loading: false,
                // backup_download: action.response.backups,
                success: true,
                err_mess: null,
            };

        case BACKUP.BACKUP_RESTORE_FAILED_V6:
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

export default BackupRestoreReducerV6;
