import SNAPSHOT from "Redux/V1/Sites/Backups/Snapshot/ActionType";
const SnapshotListReducer = (
    state = {
        loading: false,
        success: false,
        snapshot_list: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case SNAPSHOT.SNAPSHOT_GET:
            return {
                ...state,
                loading: true,
                success: false,
                snapshot_list: [],
                err_mess: null,
            };
        case SNAPSHOT.SNAPSHOT_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                snapshot_list: action.response.backups,
                success: true,
                err_mess: null,
            };
        case SNAPSHOT.SNAPSHOT_MERGE:
            state.snapshot_list.unshift(action.response.backup);
            return {
                ...state,
                loading: false,
                success: true,
                err_mess: null,
            };
        case SNAPSHOT.SNAPSHOT_GET_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                snapshot_list: [],
                err_mess: action.response,
            };
        default:
            return state;
    }
};

export default SnapshotListReducer;
