import { combineReducers } from "redux";
import PhpRestartReducerV2 from "Redux/V2/Sites/Operations/PHPRestart/PHPRestartReducerV2";
import NginxRestartReducerV2 from "Redux/V2/Sites/Operations/NginxRestart/NginxRestartReducerV2";

const OperationRootReducerV2 = combineReducers({
    phpRestartV2: PhpRestartReducerV2,
    nginxRestartV2: NginxRestartReducerV2,
});
export default OperationRootReducerV2;
