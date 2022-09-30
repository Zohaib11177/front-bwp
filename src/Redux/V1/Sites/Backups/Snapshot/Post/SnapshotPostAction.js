import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";

const snapshotPost = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_POST,
        request: data,
    };
};
const snapshotPostSuccess = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_POST_SUCCESS,
        response: data,
    };
};
const snapshotPostFailed = (data) => {
    return {
        type: SNAPSHOT.SNAPSHOT_POST_FAILED,
        response: data,
    };
};

const SnapshotCreateAction = {
    snapshotPost,
    snapshotPostSuccess,
    snapshotPostFailed,
};

export default SnapshotCreateAction;
