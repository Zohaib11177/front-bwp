import { all } from "redux-saga/effects";
import { AffiliateStatsSaga } from "Redux/V1/Affiliate/AffiliateStats/AffiliateStatsSaga";
import { AffiliateWalletSaga } from "Redux/V1/Affiliate/AffiliateWallet/AffiliateWalletSaga";
import { AffiliateClickSaga } from "Redux/V1/Affiliate/AffiliateClick/AffiliateClickSaga";
import AffProfileRootSaga from "Redux/V1/Affiliate/AffiliateProfile/AffProfileRootSaga";

export default function* AffiliateRootSaga() {
    yield all([
        AffiliateStatsSaga(),
        AffiliateWalletSaga(),
        AffiliateClickSaga(),
        AffProfileRootSaga(),
    ]);
}
