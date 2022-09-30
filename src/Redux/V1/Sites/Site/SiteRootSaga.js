import { all } from "redux-saga/effects";
import { SiteListSaga } from "Redux/V1/Sites/Site/Get/SiteGetSaga";
import { SiteCreateSaga } from "Redux/V1/Sites/Site/Post/SitePostSaga";
import { SiteDeleteSaga } from "Redux/V1/Sites/Site/Delete/SiteDeleteSaga";
import { SiteDeleteCancelSaga } from "Redux/V1/Sites/Site/SiteDeleteCancel/SiteDeleteCancelSaga";
import { SiteRegionSaga } from "Redux/V1/Sites/Site/SiteRegion/SiteRegionSaga";
import { SiteIdentitySaga } from "Redux/V1/Sites/Site/SiteIdentity/SiteIdentitySaga";
import { SiteDatabaseSaga } from "Redux/V1/Sites/Site/SiteDatabase/SiteDatabaseSaga";
import { SiteCostingSaga } from "Redux/V1/Sites/Site/SiteCosting/SiteCostingSaga";
import { SiteAddonSaga } from "Redux/V1/Sites/Site/SiteAddon/SiteAddonSaga";
import { SiteCloudProviderListSaga } from "Redux/V1/Sites/Site/SiteCloudProvider/SiteCloudProviderSaga";

export default function* SiteSubRootSaga() {
    yield all([
        SiteListSaga(),
        SiteCreateSaga(),
        SiteDeleteSaga(),
        SiteDeleteCancelSaga(),
        SiteRegionSaga(),
        SiteIdentitySaga(),
        SiteDatabaseSaga(),
        SiteCostingSaga(),
        SiteAddonSaga(),
        SiteCloudProviderListSaga(),
    ]);
}
