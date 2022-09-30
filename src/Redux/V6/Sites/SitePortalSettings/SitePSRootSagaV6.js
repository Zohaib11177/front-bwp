import { all } from "redux-saga/effects";
import { sitePSGetSagaV6 } from "Redux/V6/Sites/SitePortalSettings/Get/SiteGetSagaV6";

function* SitePSRootSagaV6() {
    yield all([sitePSGetSagaV6()]);
}
export default SitePSRootSagaV6;
