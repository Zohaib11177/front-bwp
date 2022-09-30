import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";

const SnapshotCreateReducer = (
    state = {
        loading: false,
        success: false,
        snapshot: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SNAPSHOT.SNAPSHOT_POST:
            return {
                ...state,
                loading: true,
                success: false,
                snapshot: [],
                err_mess: null,
            };
        case SNAPSHOT.SNAPSHOT_POST_SUCCESS:
            return {
                ...state,
                snapshot: action.response,
                loading: false,
                success: false,
                err_mess: null,
            };
        case SNAPSHOT.SNAPSHOT_POST_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                snapshot: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SnapshotCreateReducer;
