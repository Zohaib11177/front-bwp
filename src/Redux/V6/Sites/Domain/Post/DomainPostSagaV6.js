import { takeEvery, put } from "redux-saga/effects";
import DOMAIN from "Redux/V6/Sites/Domain/ActionTypeV6";
import DomainCreateActionV6 from "Redux/V6/Sites/Domain/Post/DomainPostActionV6";
import DomainServiceV6 from "Services/V6/DomainServiceV6";
import ToastHelper from "Helpers/ToastHelper";
import SiteDetailActionV6 from "Redux/V6/Sites/Site/SiteDetail/SiteDetailActionV6";
function* postDomain(data) {
    try {
        ToastHelper.info();
        const response = yield DomainServiceV6.postDomain(
            data.request.form,
            data.request.host
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(DomainCreateActionV6.postDomainSuccess(response.data));
            yield put(SiteDetailActionV6.siteDetail(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                DomainCreateActionV6.postDomainFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(DomainCreateActionV6.postDomainFailed());
    }
}

export function* domainPostSagaV6() {
    yield takeEvery(DOMAIN.DOMAIN_POST_V6, postDomain);
}
