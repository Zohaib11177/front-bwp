import { takeEvery, put } from "redux-saga/effects";
import SITE_ACTION_TYPE from "Redux/V1/Sites/SiteActionType";
import SiteDetailAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import SiteDetailService from "Services/V1/SiteDetailService";

function* getSiteDetail(data) {
    try {
        const response = yield SiteDetailService.getSiteDetail(data.host);
        if (response.success) {
            yield put(
                SiteDetailAction.getSiteDetailSuccess(response.data.site)
            );
        } else {
            yield put(SiteDetailAction.getSiteDetailFailed(response.data.site));
        }
    } catch (error) {
        // window.location.href = "/404";
    }
}

export function* getSiteDetailSaga() {
    yield takeEvery(SITE_ACTION_TYPE.GET_SITE_DETAIL, getSiteDetail);
}
