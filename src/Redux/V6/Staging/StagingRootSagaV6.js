import { all } from "redux-saga/effects";
import { stagingPostSagaV6 } from "Redux/V6/Staging/Post/StagingPostSagaV6";
import { syncPushSagaV6 } from "Redux/V6/Staging/SyncPushEnv/SyncPushSagaV6";

function* StagingRootSagaV6() {
    yield all([stagingPostSagaV6(), syncPushSagaV6()]);
}
export default StagingRootSagaV6;
