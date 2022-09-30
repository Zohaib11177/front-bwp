import { all } from "redux-saga/effects";
import { AccountVerificationSagaV2 } from "Redux/V2/Auth/Verification/AccountVerificationResend/AccountVerificationSagaV2";

export default function* AuthRootSagaV2() {
    yield all([AccountVerificationSagaV2()]);
}
