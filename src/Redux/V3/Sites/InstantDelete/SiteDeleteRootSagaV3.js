import { all } from "redux-saga/effects";
import { InstantDeleteSagaV3 } from "Redux/V3/Sites/InstantDelete/Delete/SiteDeleteSagaV3";
export default function* SiteDeleteRootSagaV3() {
    yield all([
        InstantDeleteSagaV3(),
    ]);
}
