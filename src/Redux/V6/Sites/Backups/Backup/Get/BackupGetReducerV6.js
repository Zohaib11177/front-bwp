import BACKUP from "Redux/V6/Sites/Backups/Backup/ActionTypeV6";

const BackupListReducerV6 = (
    state = {
        loading: true,
        success: false,
        backup_list: [],
        pagination: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case BACKUP.BACKUP_GET_V6:
            return {
                ...state,
                loading: true,
                success: false,
                backup_list: [],
                pagination: {},
                err_mess: null,
            };
        case BACKUP.BACKUP_GET_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                backup_list: action.response.backups,
                pagination: action.response.pagination,
                success: true,
                err_mess: null,
            };
        case BACKUP.BACKUP_MERGE:
            state.backup_list.unshift(action.response.backup);
            return {
                ...state,
                loading: false,
                success: true,
                backup_list: [],
                pagination: {},
                err_mess: null,
            };
        case BACKUP.BACKUP_GET_V6_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                backup_list: [],
                pagination: {},
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default BackupListReducerV6;
