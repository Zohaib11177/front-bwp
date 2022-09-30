import { all } from "redux-saga/effects";
import { siteOtpGetSagaV6 } from "Redux/V6/Sites/SiteOtp/Get/SiteGetSagaV6";
import { siteOtpPutSagaV6 } from "Redux/V6/Sites/SiteOtp/Put/SitePutSagaV6";

function* SiteVersionRootSagaV6() {
    yield all([siteOtpGetSagaV6(), siteOtpPutSagaV6()]);
}
export default SiteVersionRootSagaV6;
