import { all } from "redux-saga/effects";
import { ProfileUpdateSagaV2 } from "Redux/V2/Profiles/Put/ProfilePutSagaV2";

function* ProfileRootSagaV2() {
    yield all([ProfileUpdateSagaV2()]);
}

export default ProfileRootSagaV2;
