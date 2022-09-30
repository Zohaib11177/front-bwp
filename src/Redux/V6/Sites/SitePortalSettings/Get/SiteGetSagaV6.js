import { takeEvery, put } from 'redux-saga/effects';
import SITE_PORTAL_SETTINGS_GET_V6 from "Redux/V6/Sites/SitePortalSettings/ActionTypeV6";
import SitePSGetActionV6 from 'Redux/V6/Sites/SitePortalSettings/Get/SiteGetActionV6';
import SitePSServiceV6 from 'Services/V6/SitePortalSettingsV6';
import ToastHelper from 'Helpers/ToastHelper';

function* sitePSGet(data) {
    try {
        ToastHelper.info();
        const response = yield SitePSServiceV6.sitePSGet();
        if (response.success) {
            console.log(response)
            // ToastHelper.success(response.message);
            yield put(SitePSGetActionV6.sitePSGetSuccess(response.data));
            localStorage.setItem(
                "portal_settings",
                JSON.stringify(response.data.portal_settings.primary_color ? response.data.portal_settings : {} )
            );
        } else {
            // ToastHelper.error(response.error.message);
            yield put(
                SitePSGetActionV6.sitePSGetFailed(response.error.message)
            );
        }
    } catch (error) {
        // console.log(error)
        // ToastHelper.error(
        //     "Something went wrong and we have been notified about the problem"
        // );
        yield put(SitePSGetActionV6.sitePSGetFailed());
    }
}

export function* sitePSGetSagaV6() {
    yield takeEvery(SITE_PORTAL_SETTINGS_GET_V6.SITE_PORTAL_SETTINGS_GET_V6, sitePSGet);
}
