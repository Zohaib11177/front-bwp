import { takeEvery, put } from 'redux-saga/effects';
import CDN from 'Redux/V2/Sites/Addons/Cdn/ActionTypeV2';
import CdnDisableActionV2 from 'Redux/V2/Sites/Addons/Cdn/CdnDisable/CdnDisableActionV2';
import CdnDetailAction from 'Redux/V1/Sites/Addons/Cdn/First/CdnFirstAction';
import CdnServiceV2 from 'Services/V2/CdnServiceV2';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* cdnDisableV2(data) {
    try {
        ToastHelper.info();
        const response = yield CdnServiceV2.cdnDisable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CdnDisableActionV2.cdnDisableSuccess(response.data));
            yield put(CdnDetailAction.cdnFirstSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CdnDisableActionV2.cdnDisableFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(CdnDisableActionV2.cdnDisableFailed());
    }
}

export function* CdnDisableSagaV2() {
    yield takeEvery(CDN.CDN_DISABLE_V2, cdnDisableV2);
}
