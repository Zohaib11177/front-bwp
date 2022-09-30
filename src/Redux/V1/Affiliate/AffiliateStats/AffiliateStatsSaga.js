import { takeEvery, put } from "redux-saga/effects";
import AFFILIATE from "Redux/V1/Affiliate/ActionType";
import AffiliateStatsAction from "Redux/V1/Affiliate/AffiliateStats/AffiliateStatsAction";
import AffiliateService from "Services/V1/AffiliateService";

function* affiliateStats(data) {
    try {
        const response = yield AffiliateService.affiliateStats(data.request);
        if (response.success) {
            yield put(
                AffiliateStatsAction.affiliateStatsSuccess(response.data)
            );
        } else {
            yield put(
                AffiliateStatsAction.affiliateStatsFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* AffiliateStatsSaga() {
    yield takeEvery(AFFILIATE.AFFILIATE_STATS, affiliateStats);
}
