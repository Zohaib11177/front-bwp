import { takeEvery, put } from "redux-saga/effects";
import AFFILIATE from "Redux/V1/Affiliate/ActionType";
import AffiliateClickAction from "Redux/V1/Affiliate/AffiliateClick/AffiliateClickAction";
import AffiliateService from "Services/V1/AffiliateService";

function* affiliateClick(data) {
    try {
        const response = yield AffiliateService.affiliateClick(data.request);
        if (response.success) {
            yield put(
                AffiliateClickAction.affiliateClickSuccess(response.data)
            );
        } else {
            yield put(
                AffiliateClickAction.affiliateClickFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* AffiliateClickSaga() {
    yield takeEvery(AFFILIATE.AFFILIATE_CLICK, affiliateClick);
}
