import { all } from "redux-saga/effects";
import { AlertListSagaV3 } from "Redux/V3/SystemAlerts/Get/AlertGetSagaV3";
export default function* AlertRootSagaV3() {
    yield all([
        AlertListSagaV3(),
    ]);
}
