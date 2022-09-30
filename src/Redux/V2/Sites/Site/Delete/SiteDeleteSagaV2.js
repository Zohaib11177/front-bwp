import { takeEvery, put } from 'redux-saga/effects';
import SITE from 'Redux/V2/Sites/Site/ActionTypeV2';
import SiteServiceV2 from 'Services/V2/SiteServiceV2';
import SiteDeleteActionV2 from 'Redux/V2/Sites/Site/Delete/SiteDeleteActionV2';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* siteDelete(data) {
    try {
        ToastHelper.info();
        const response = yield SiteServiceV2.siteDelete(data.request.identity);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteDeleteActionV2.siteDeleteSuccess(response.data));

            window.location.href = '/sites';
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteDeleteActionV2.siteDeleteFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(SiteDeleteActionV2.siteDeleteFailed());
    }
}

export function* SiteDeleteSagaV2() {
    yield takeEvery(SITE.SITE_DELETE_V2, siteDelete);
}
