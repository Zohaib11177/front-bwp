import { takeEvery, put } from "redux-saga/effects";
import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";
import CdnDetailAction from "Redux/V1/Sites/Addons/Cdn/First/CdnFirstAction";
import CdnService from "Services/V1/CdnService";
import ToastHelper from "Helpers/ToastHelper";

function* cdnFirst(data) {
    try {
        const response = yield CdnService.cdnFirst(data.request);
        if (response.success) {
            yield put(CdnDetailAction.cdnFirstSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(CdnDetailAction.cdnFirstFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* CdnDetailSaga() {
    yield takeEvery(CDN.CDN_FIRST, cdnFirst);
}
