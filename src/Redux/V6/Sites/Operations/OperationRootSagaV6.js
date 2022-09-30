import { all } from "redux-saga/effects";
import { CacheAllClearSagaV6 } from "Redux/V6/Sites/Operations/CacheAllClear/CacheAllClearSagaV6";

export default function* OperationRootSagaV6() {
    yield all([CacheAllClearSagaV6()]);
}
