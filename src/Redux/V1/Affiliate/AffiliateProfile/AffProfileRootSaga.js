import { all } from "redux-saga/effects";
import { AffProfileUpdateSaga } from "Redux/V1/Affiliate/AffiliateProfile/Put/AffProfilePutSaga";

export default function* AffProfileRootSaga() {
    yield all([AffProfileUpdateSaga()]);
}
