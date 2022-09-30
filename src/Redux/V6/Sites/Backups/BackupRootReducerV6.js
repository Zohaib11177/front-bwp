import { combineReducers } from "redux";
import BackupListReducerV6 from "Redux/V6/Sites/Backups/Backup/Get/BackupGetReducerV6";
import BackupDownloadReducerV6 from "Redux/V6/Sites/Backups/Backup/BackupDownload/BackupDownloadReducerV6";
import BackupRestoreReducerV6 from "Redux/V6/Sites/Backups/Backup/BackupRestore/BackupRestoreReducerV6";

const BackupRootReducer = combineReducers({
    backupList: BackupListReducerV6,
    backupDownloadV6: BackupDownloadReducerV6,
    backupRestoreV6: BackupRestoreReducerV6
});
export default BackupRootReducer;
