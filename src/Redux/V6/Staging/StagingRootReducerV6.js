import { combineReducers } from "redux";
import StagingCreateReducerV6 from "Redux/V6/Staging/Post/StagingPostReducerV6";
import SyncPushReducerV6 from "Redux/V6/Staging/SyncPushEnv/SyncPushReducerV6";

const StagingRootReducerV6 = combineReducers({
    create: StagingCreateReducerV6,
    syncPush: SyncPushReducerV6,
});
export default StagingRootReducerV6;
