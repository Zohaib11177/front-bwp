import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";

const SnapshotRestoreReducer = (
    state = {
        loading: false,
        success: false,
        snapshot_restore: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SNAPSHOT.SNAPSHOT_RESTORE:
            return {
                ...state,
                loading: true,
                success: false,
                snapshot_restore: [],
                err_mess: null,
            };
        case SNAPSHOT.SNAPSHOT_RESTORE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                snapshot_restore: action.response,
                err_mess: null,
            };
        case SNAPSHOT.SNAPSHOT_RESTORE_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                snapshot_restore: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SnapshotRestoreReducer;
