import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";

const snapshotRestore = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_RESTORE,
        request: data,
    };
};
const snapshotRestoreSuccess = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_RESTORE_SUCCESS,
        response: data,
    };
};
const snapshotRestoreFailed = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_RESTORE_FAILED,
        response: data,
    };
};

const SnapshotRestoreAction = {
    snapshotRestore,
    snapshotRestoreSuccess,
    snapshotRestoreFailed,
};
export default SnapshotRestoreAction;
