import BACKUP from "Redux/V1/Sites/Backups/Backup/ActionType";

const BackupDownloadReducer = (
    state = {
        loading: false,
        success: false,
        backup_download: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_DOWNLOAD:
            return {
                ...state,
                loading: true,
                success: false,
                backup_download: [],
                err_mess: null,
            };
        case BACKUP.BACKUP_DOWNLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                backup_download: action.response.backups,
                success: true,
                err_mess: null,
            };

        case BACKUP.BACKUP_DOWNLOAD_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                backup_download: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default BackupDownloadReducer;
