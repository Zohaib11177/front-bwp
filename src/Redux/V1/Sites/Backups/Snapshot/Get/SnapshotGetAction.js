import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";

const snapshotGet = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_GET,
        request: data,
    };
};
const snapshotGetSuccess = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_GET_SUCCESS,
        response: data,
    };
};
const snapshotGetMerge = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_MERGE,
        response: data,
    };
};
const snapshotGetFailed = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_GET_FAILED,
        response: data,
    };
};
const SnapshotListAction = {
    snapshotGet,
    snapshotGetSuccess,
    snapshotGetFailed,
    snapshotGetMerge,
};
export default SnapshotListAction;
