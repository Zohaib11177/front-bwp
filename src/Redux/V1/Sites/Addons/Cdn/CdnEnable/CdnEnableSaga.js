import { takeEvery, put } from "redux-saga/effects";
import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";
import CdnEnableAction from "Redux/V1/Sites/Addons/Cdn/CdnEnable/CdnEnableAction";
import CdnDetailAction from "Redux/V1/Sites/Addons/Cdn/First/CdnFirstAction";
import CdnService from "Services/V1/CdnService";
import ToastHelper from "Helpers/ToastHelper";
import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* cdnEnable(data) {
    try {
        ToastHelper.info();
        const response = yield CdnService.cdnEnable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CdnEnableAction.cdnEnableSuccess(response.data));
            yield put(CdnDetailAction.cdnFirstSuccess(response.data));
           
        } else {
            ToastHelper.error(response.error.message);
            yield put(CdnEnableAction.cdnEnableFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CdnEnableAction.cdnEnableFailed());
    }
}

export function* CdnEnableSaga() {
    yield takeEvery(CDN.CDN_ENABLE, cdnEnable);
}
