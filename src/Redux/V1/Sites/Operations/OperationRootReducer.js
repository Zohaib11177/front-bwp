import { combineReducers } from "redux";
import PhpRestartReducer from "Redux/V1/Sites/Operations/PHPRestart/PHPRestartReducer";
import PermissionResetReducer from "Redux/V1/Sites/Operations/PermissionReset/PermissionResetReducer";
import CacheClearReducer from "Redux/V1/Sites/Operations/CacheClear/CacheClearReducer";
import NginxRestartReducer from "Redux/V1/Sites/Operations/NginxRestart/NginxRestartReducer";
import CacheClearAllReducer from "Redux/V1/Sites/Operations/CacheAllClear/CacheAllClearReducer";

const OperationRootReducer = combineReducers({
    phpRestart: PhpRestartReducer,
    permissionReset: PermissionResetReducer,
    cacheClear: CacheClearReducer,
    nginxRestart: NginxRestartReducer,
    cacheAllClear: CacheClearAllReducer,
});
export default OperationRootReducer;
