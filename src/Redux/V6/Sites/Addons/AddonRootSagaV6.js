import { all } from "redux-saga/effects";

import { UnlimitedEditsSagaV6 } from "Redux/V6/Sites/Addons/UnlimitedEdits/UnlimitedEditsSagaV6";
export default function* AddonRootSagaV6() {
    yield all([UnlimitedEditsSagaV6()]);
}
