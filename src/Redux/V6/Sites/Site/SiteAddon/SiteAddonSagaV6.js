import { put, takeLatest } from "redux-saga/effects";
import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteAddonActionV6 from "Redux/V6/Sites/Site/SiteAddon/SiteAddonActionV6";
import AddonServiceV6 from "Services/V6/SiteLaunchServiceV6";

function* siteAddon(data) {
    try {
        const response = yield AddonServiceV6.siteAddon(data.request);
        if (response.success) {
            yield put(SiteAddonActionV6.siteAddonSuccess(response.data));
        } else {
            yield put(
                SiteAddonActionV6.siteAddonFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SiteAddonSagaV6() {
    yield takeLatest(SITE.SITE_ADDON_V6, siteAddon);
}
