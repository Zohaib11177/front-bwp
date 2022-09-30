import { all } from "redux-saga/effects";
import { stagingPostSaga } from "Redux/V1/Staging/Post/StagingPostSaga";
import { stagingDeleteSaga } from "Redux/V1/Staging/Delete/StagingDeleteSaga";
import { syncPutSaga } from "Redux/V1/Staging/Put/SyncPutSaga";
import { StagingRenewalSaga } from "Redux/V1/Staging/StagingRenewal/StagingRenewalSaga";
import { StagingLogsSaga } from "Redux/V1/Staging/StagingLogs/StagingLogsSaga";
import { syncPushSaga } from "Redux/V1/Staging/SyncPushEnv/SyncPushSaga";

function* StagingRootSaga() {
    yield all([
        stagingPostSaga(),
        stagingDeleteSaga(),
        syncPutSaga(),
        StagingRenewalSaga(),
        StagingLogsSaga(),
        syncPushSaga(),
    ]);
}
export default StagingRootSaga;
