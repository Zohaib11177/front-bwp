import { all } from "redux-saga/effects";
// import { SnapshotListSaga } from "Redux/V1/Sites/Backups/Snapshot/Get/SnapshotGetSaga";
import { BackupCreateSaga } from "Redux/V1/Sites/Backups/Backup/Post/BackupPostSaga";
import { BackupRestoreSaga } from "Redux/V1/Sites/Backups/Backup/Restore/BackupRestoreSaga";
// import { SnapshotRestoreSaga } from "Redux/V1/Sites/Backups/Snapshot/SnapshotRestore/SnapshotRestoreSaga";
import { BackupListSaga } from "Redux/V1/Sites/Backups/Backup/Get/BackupGetSaga";

export default function* BackupRootSaga() {
    yield all([
        BackupRestoreSaga(),
        BackupCreateSaga(),
        // SnapshotRestoreSaga(),
        BackupListSaga(),
    ]);
}
