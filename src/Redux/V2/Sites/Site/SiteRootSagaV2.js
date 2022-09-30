import { all } from "redux-saga/effects";
import { SiteCostingSagaV2 } from "Redux/V2/Sites/Site/SiteCosting/SiteCostingSagaV2";
import { SiteDeleteSagaV2 } from "Redux/V2/Sites/Site/Delete/SiteDeleteSagaV2";
import { SiteRegionSagaV2 } from "Redux/V2/Sites/Site/SiteRegion/SiteRegionSaga";
export default function* SiteSubRootSagaV2() {
    yield all([SiteCostingSagaV2(), SiteDeleteSagaV2(), SiteRegionSagaV2()]);
}
