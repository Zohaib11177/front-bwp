import { combineReducers } from "redux";
import BackupDownloadReducerV2 from "Redux/V2/Sites/Backups/Backup/BackupDownload/BackupDownloadReducerV2";
// import BackupCreateReducerV2 from "Redux/V2/Sites/Backups/Backup/Post/BackupPostReducerV2";
import BackupRestoreReducerV2 from "Redux/V2/Sites/Backups/Backup/BackupRestore/BackupRestoreReducerV2";

const BackupRootReducerV2 = combineReducers({
    backupDownloadV2: BackupDownloadReducerV2,
    // backupCreateV2: BackupCreateReducerV2,
    backupRestoreV2: BackupRestoreReducerV2,
});
export default BackupRootReducerV2;
