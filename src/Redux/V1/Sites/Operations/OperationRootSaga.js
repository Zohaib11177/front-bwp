import { all } from "redux-saga/effects";
import { PhpRestartSaga } from "Redux/V1/Sites/Operations/PHPRestart/PHPRestartSaga";
import { PermissionResetSaga } from "Redux/V1/Sites/Operations/PermissionReset/PermissionResetSaga";
import { CacheClearSaga } from "Redux/V1/Sites/Operations/CacheClear/CacheClearSaga";
import { NginxRestartSaga } from "Redux/V1/Sites/Operations/NginxRestart/NginxRestartSaga";
import { CacheAllClearSaga } from "Redux/V1/Sites/Operations/CacheAllClear/CacheAllClearSaga";

export default function* OperationRootSaga() {
    yield all([
        PhpRestartSaga(),
        PermissionResetSaga(),
        CacheClearSaga(),
        NginxRestartSaga(),
        CacheAllClearSaga(),
    ]);
}
