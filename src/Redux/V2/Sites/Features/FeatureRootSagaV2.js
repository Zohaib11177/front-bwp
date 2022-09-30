import { all } from "redux-saga/effects";
import { AccessSharingSagaV2 } from "Redux/V2/Sites/Features/AccessSharing/AccessSharingSagaV2";

export default function* FeatureRootSagaV2() {
    yield all([AccessSharingSagaV2()]);
}
