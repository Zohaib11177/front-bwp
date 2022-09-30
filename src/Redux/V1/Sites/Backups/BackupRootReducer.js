import { combineReducers } from "redux";
import BackupPostReducer from "Redux/V1/Sites/Backups/Backup/Post/BackupPostReducer";
import BackupRestoreReducer from "Redux/V1/Sites/Backups/Backup/Restore/BackupRestoreReducer";
import BackupListReducer from "Redux/V1/Sites/Backups/Backup/Get/BackupGetReducer";

const BackupRootReducer = combineReducers({
    backupRestore: BackupRestoreReducer,
    backupCreate: BackupPostReducer,
    backupList: BackupListReducer,
});
export default BackupRootReducer;
