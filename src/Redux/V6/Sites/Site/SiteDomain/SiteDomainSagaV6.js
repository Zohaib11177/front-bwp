import { put, takeLatest } from "redux-saga/effects";
import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteDomainActionV6 from "Redux/V6/Sites/Site/SiteDomain/SiteDomainActionV6";
import DomainServiceV6 from "Services/V6/SiteLaunchServiceV6";

function* siteDomain(data) {
    try {
        const response = yield DomainServiceV6.siteDomain(data.request);
        if (response.success) {
            yield put(SiteDomainActionV6.siteDomainSuccess(response.data));
        } else {
            yield put(
                SiteDomainActionV6.siteDomainFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* SiteDomainSagaV6() {
    yield takeLatest(SITE.SITE_DOMAIN_V6, siteDomain);
}
