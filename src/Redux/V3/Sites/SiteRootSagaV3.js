import { all } from "redux-saga/effects";
import FeatureRootSagaV3 from "Redux/V3/Sites/Features/FeatureRootSagaV3";
import SiteDetailSagaV3 from "Redux/V3/Sites/SiteDetail/SiteDetailSaga";
import SiteListSagaV3 from "Redux/V3/Sites/SiteList/SiteListSagaV3";
import SiteDeleteRootSagaV3 from "Redux/V3/Sites/InstantDelete/SiteDeleteRootSagaV3";

export default function* SiteRootSagaV3() {
    yield all([
        FeatureRootSagaV3(),
        SiteDetailSagaV3(),
        SiteListSagaV3(),
        SiteDeleteRootSagaV3()
    ]);
}
