import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";

const BackupDownloadReducerV6 = (
    state = {
        loading: false,
        success: false,
        backup_download: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_DOWNLOAD_V6:
            return {
                ...state,
                loading: true,
                success: false,
                backup_download: [],
                err_mess: null,
            };
        case BACKUP.BACKUP_DOWNLOAD_SUCCESS_V6:
            return {
                ...state,
                loading: false,
                // backup_download: action.response.backups,
                success: true,
                err_mess: null,
            };

        case BACKUP.BACKUP_DOWNLOAD_FAILED_V6:
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

export default BackupDownloadReducerV6;
