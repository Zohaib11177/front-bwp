import { all } from "redux-saga/effects";
import { siteVersionPutSagaV6 } from "Redux/V6/Sites/SiteVersion/Put/SitePutSagaV6";

function* SiteVersionRootSagaV6() {
    yield all([siteVersionPutSagaV6()]);
}
export default SiteVersionRootSagaV6;
