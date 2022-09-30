import { takeEvery, put } from "redux-saga/effects";
import CDN from "Redux/V1/Sites/Addons/Cdn/ActionType";
import CdnDisableAction from "Redux/V1/Sites/Addons/Cdn/CdnDisable/CdnDisableAction";
import CdnDetailAction from "Redux/V1/Sites/Addons/Cdn/First/CdnFirstAction";
import CdnService from "Services/V1/CdnService";
import ToastHelper from "Helpers/ToastHelper";
import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* cdnDisable(data) {
    try {
        ToastHelper.info();
        const response = yield CdnService.cdnDisable(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CdnDisableAction.cdnDisableSuccess(response.data));
            yield put(CdnDetailAction.cdnFirstSuccess(response.data));
          
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CdnDisableAction.cdnDisableFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CdnDisableAction.cdnDisableFailed());
    }
}

export function* CdnDisableSaga() {
    yield takeEvery(CDN.CDN_DISABLE, cdnDisable);
}
