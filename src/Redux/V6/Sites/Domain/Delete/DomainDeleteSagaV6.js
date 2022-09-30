import { takeEvery, put } from "redux-saga/effects";
import DOMAIN from "Redux/V6/Sites/Domain/ActionTypeV6";
import DomainDeleteActionV6 from "Redux/V6/Sites/Domain/Delete/DomainDeleteActionV6";
import DomainServiceV6 from "Services/V6/DomainServiceV6";
import ToastHelper from "Helpers/ToastHelper";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
function* deleteDomain(data) {
    try {
        ToastHelper.info();

        const response = yield DomainServiceV6.deleteDomain(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(DomainDeleteActionV6.deleteDomainSuccess(response.data));
            yield put(SiteDetailActionV6.siteDetail(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                DomainDeleteActionV6.deleteDomainFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(DomainDeleteActionV6.deleteDomainFailed());
    }
}

export function* domainDeleteSagaV6() {
    yield takeEvery(DOMAIN.DOMAIN_DELETE_V6, deleteDomain);
}
