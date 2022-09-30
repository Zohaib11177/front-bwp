import { takeEvery, put } from 'redux-saga/effects';
import CDN from 'Redux/V2/Sites/Addons/Cdn/ActionTypeV2';
import CdnUpdateActionV2 from 'Redux/V2/Sites/Addons/Cdn/Put/CdnPutActionV2';
import CdnServiceV2 from 'Services/V2/CdnServiceV2';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* cdnPutV2(data) {
    try {
        ToastHelper.info();
        const response = yield CdnServiceV2.cdnPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CdnUpdateActionV2.cdnPutSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(CdnUpdateActionV2.cdnPutFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(CdnUpdateActionV2.cdnPutFailed());
    }
}

export function* CdnUpdateSagaV2() {
    yield takeEvery(CDN.CDN_PUT_V2, cdnPutV2);
}
