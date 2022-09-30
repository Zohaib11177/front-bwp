import BACKUP from "Redux/V2/Sites/Backups/Backup/ActionTypeV2";

const BackupDownloadReducerV2 = (
    state = {
        loading: false,
        success: false,
        backup_download: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_DOWNLOAD_V2:
            return {
                ...state,
                loading: true,
                success: false,
                backup_download: [],
                err_mess: null,
            };
        case BACKUP.BACKUP_DOWNLOAD_SUCCESS_V2:
            return {
                ...state,
                loading: false,
                backup_download: action.response.backups,
                success: true,
                err_mess: null,
            };

        case BACKUP.BACKUP_DOWNLOAD_FAILED_V2:
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

export default BackupDownloadReducerV2;
