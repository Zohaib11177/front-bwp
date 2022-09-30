import { all } from "redux-saga/effects";
import { PhpRestartSagaV2 } from "Redux/V2/Sites/Operations/PHPRestart/PHPRestartSagaV2";
import { NginxRestartSagaV2 } from "Redux/V2/Sites/Operations/NginxRestart/NginxRestartSagaV2";

export default function* OperationRootSagaV2() {
    yield all([PhpRestartSagaV2(), NginxRestartSagaV2()]);
}
