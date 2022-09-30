import { all } from "redux-saga/effects";
import { siteWLGetSagaV6 } from "Redux/V6/Sites/SiteWhiteLabel/Get/SiteWLSagaV6";
import { siteWLPostSagaV6 } from "Redux/V6/Sites/SiteWhiteLabel/Post/SitePostSagaV6";
import { siteWLPutSagaV6 } from "./PUT/SitePutSagaV6";

function* SiteVersionRootSagaV6() {
    yield all([siteWLGetSagaV6(), siteWLPostSagaV6(), siteWLPutSagaV6()]);
}
export default SiteVersionRootSagaV6;
