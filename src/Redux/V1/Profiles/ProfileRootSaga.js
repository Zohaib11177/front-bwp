import { all } from "redux-saga/effects";
import { ProfileUpdateSaga } from "Redux/V1/Profiles/Put/ProfileUpdateSaga";

function* ProfileRootSaga() {
    yield all([ProfileUpdateSaga()]);
}

export default ProfileRootSaga;
