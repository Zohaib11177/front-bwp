import { all } from "redux-saga/effects";
import { BackupListSagaV6 } from "Redux/V6/Sites/Backups/Backup/Get/BackupGetSagaV6";
import { BackupDownloadSagaV6 } from "Redux/V6/Sites/Backups/Backup/BackupDownload/BackupDownloadSagaV6";
import { BackupRestoreSagaV6 } from "Redux/V6/Sites/Backups/Backup/BackupRestore/BackupRestoreSagaV6";

export default function* BackupRootSagaV6() {
    yield all([BackupListSagaV6(), BackupDownloadSagaV6(), BackupRestoreSagaV6()]);
}
