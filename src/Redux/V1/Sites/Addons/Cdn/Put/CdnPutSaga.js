import { takeEvery, put } from "redux-saga/effects";
import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";
import CdnUpdateAction from "Redux/V1/Sites/Addons/Cdn/Put/CdnPutAction";
import CdnService from "Services/V1/CdnService";
import ToastHelper from "Helpers/ToastHelper";
import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* cdnPut(data) {
    try {
        ToastHelper.info();
        const response = yield CdnService.cdnPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CdnUpdateAction.cdnPutSuccess(response.data));
           
        } else {
            ToastHelper.error(response.error.message);
            yield put(CdnUpdateAction.cdnPutFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CdnUpdateAction.cdnPutFailed());
    }
}

export function* CdnUpdateSaga() {
    yield takeEvery(CDN.CDN_PUT, cdnPut);
}
