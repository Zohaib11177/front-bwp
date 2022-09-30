import { all } from "redux-saga/effects";
import { WordpressLoginSagaV3 } from "Redux/V3/Sites/Features/WordpressLogin/WordpressLoginSagaV3";

export default function* FeatureRootSagaV3() {
    yield all([WordpressLoginSagaV3()]);
}
