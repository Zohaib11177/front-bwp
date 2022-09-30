import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";

const BackupCreateReducerV2 = (
    state = {
        loading: false,
        success: false,
        backup_create: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_POST_V2:
            return {
                ...state,
                loading: true,
                success: false,
                backup_create: [],
                err_mess: null,
            };
        case BACKUP.BACKUP_POST_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                backup_create: action.response.backups,
                success: true,
                err_mess: null,
            };
        case BACKUP.BACKUP_POST_FAILED_V2:
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

export default BackupCreateReducerV2;
