import { takeEvery, put } from 'redux-saga/effects';
import SITE_ACTION_TYPE from 'Redux/V1/Sites/SiteActionType';
import UpTimeReportAction from 'Redux/V1/Sites/UpTimeReport/UpTimeReportAction';
import SiteService from 'Services/V1/SiteService';
// import ToastHelper from 'Helpers/ToastHelper';

function* upTimeReportGet(data) {
    try {
        const response = yield SiteService.upTimeReport(data.request);
        if (response.success) {
            yield put(UpTimeReportAction.upTimeReportGetSuccess(response.data));
        } else {
            yield put(
                UpTimeReportAction.upTimeReportGetFailed(response.error.message)
            );
        }
    } catch (error) {
        // ToastHelper.error();
    }
}

export function* upTImeReportSaga() {
    yield takeEvery(SITE_ACTION_TYPE.UP_TIME_REPORT, upTimeReportGet);
}
