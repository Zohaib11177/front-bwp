import { takeEvery, put } from 'redux-saga/effects';
import CDN from 'Redux/V2/Sites/Addons/Cdn/ActionTypeV2';
import CdnEnableActionV2 from 'Redux/V2/Sites/Addons/Cdn/CdnEnable/CdnEnableActionV2';
import CdnDetailAction from 'Redux/V1/Sites/Addons/Cdn/First/CdnFirstAction';
import CdnServiceV2 from 'Services/V2/CdnServiceV2';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* cdnEnableV2(data) {
    try {
        ToastHelper.info();
        const response = yield CdnServiceV2.cdnEnable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CdnEnableActionV2.cdnEnableSuccess(response.data));
            yield put(CdnDetailAction.cdnFirstSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CdnEnableActionV2.cdnEnableFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(CdnEnableActionV2.cdnEnableFailed());
    }
}

export function* CdnEnableSagaV2() {
    yield takeEvery(CDN.CDN_ENABLE_V2, cdnEnableV2);
}
