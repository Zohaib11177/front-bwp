import { all } from "redux-saga/effects";
import { BackupDownloadSagaV2 } from "Redux/V2/Sites/Backups/Backup/BackupDownload/BackupDownloadSagaV2";
// import { BackupCreateSagaV2 } from "Redux/V2/Sites/Backups/Backup/Post/BackupPostSagaV2";
import { BackupRestoreSagaV2 } from "Redux/V2/Sites/Backups/Backup/BackupRestore/BackupRestoreSagaV2";

export default function* BackupRootSagaV2() {
    yield all([
        BackupDownloadSagaV2(),
        // BackupCreateSagaV2(),
        BackupRestoreSagaV2(),
    ]);
}
