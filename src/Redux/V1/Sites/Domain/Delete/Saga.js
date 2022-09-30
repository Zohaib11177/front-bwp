import { takeEvery, put } from 'redux-saga/effects';
import DOMAIN_ACTION_TYPE from 'Redux/V1/Sites/Domain/ActionTypes';
import DeleteDomainAction from 'Redux/V1/Sites/Domain/Delete/Action';
import DomainService from 'Services/V1/DomainService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";
import DomainListAction from 'Redux/V1/Domain/Get/DomainGetAction';
function* deleteDomain(data) {
    try {
        ToastHelper.info();

        const response = yield DomainService.deleteDomain(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(DeleteDomainAction.deleteDomainSuccess(response.data));
            yield put(DomainListAction.domainGet(data.request.identity));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                DeleteDomainAction.deleteDomainFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(DeleteDomainAction.deleteDomainFailed());
    }
}

export function* deleteDomainSaga() {
    yield takeEvery(DOMAIN_ACTION_TYPE.DELETE_DOMAIN, deleteDomain);
}
