import { combineReducers } from "redux";
import StagingCreateReducer from "Redux/V1/Staging/Post/StagingPostReducer";
import StagingDeleteReducer from "Redux/V1/Staging/Delete/StagingDeleteReducer";
import SyncPutReducer from "Redux/V1/Staging/Put/SyncPutReducer";
import StagingRenewalReducer from "Redux/V1/Staging/StagingRenewal/StagingRenewalReducer";
import StagingLogsReducer from "Redux/V1/Staging/StagingLogs/StagingLogsReducer";
import SyncPushReducer from "Redux/V1/Staging/SyncPushEnv/SyncPushReducer";

const StagingRootReducer = combineReducers({
    create: StagingCreateReducer,
    delete: StagingDeleteReducer,
    sync: SyncPutReducer,
    renewal: StagingRenewalReducer,
    logs: StagingLogsReducer,
    syncPush: SyncPushReducer,
});
export default StagingRootReducer;
