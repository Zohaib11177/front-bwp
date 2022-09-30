import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";

const BackupCreateReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_RESTORE:
            return {
                ...state,
                loading: true,
                success: false,
                backup_create: [],
                err_mess: null,
            };
        case BACKUP.BACKUP_RESTORE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
            };
        case BACKUP.BACKUP_RESTORE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                backup_create: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default BackupCreateReducer;
