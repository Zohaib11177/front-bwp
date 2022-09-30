import { takeEvery, put } from "redux-saga/effects";
import AFFILIATE from "Redux/V1/Affiliate/ActionType";
import AffiliateWalletAction from "Redux/V1/Affiliate/AffiliateWallet/AffiliateWalletAction";
import AffiliateService from "Services/V1/AffiliateService";

function* affiliateWallet(data) {
    try {
        const response = yield AffiliateService.affiliateWallet(data.request);
        if (response.success) {
            yield put(
                AffiliateWalletAction.affiliateWalletSuccess(response.data)
            );
        } else {
            yield put(
                AffiliateWalletAction.affiliateWalletFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* AffiliateWalletSaga() {
    yield takeEvery(AFFILIATE.AFFILIATE_WALLET, affiliateWallet);
}
