import { takeEvery, put } from 'redux-saga/effects';
import CDN from 'Redux/V1/Sites/Addons/Cdn/ActionType';
import CdnCacheAction from 'Redux/V1/Sites/Addons/Cdn/CdnCache/CdnCacheAction';
import CdnService from 'Services/V1/CdnService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* cdnCache(data) {
    try {
        ToastHelper.info();
        const response = yield CdnService.cdnCache(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CdnCacheAction.cdnCacheSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(CdnCacheAction.cdnCacheFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(CdnCacheAction.cdnCacheFailed());
    }
}

export function* CdnCacheSaga() {
    yield takeEvery(CDN.CDN_CACHE, cdnCache);
}
