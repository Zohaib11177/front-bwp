import { takeEvery, put } from 'redux-saga/effects';
import DOMAIN_ACTION_TYPE from 'Redux/V1/Sites/Domain/ActionTypes';
import PostDomainAction from 'Redux/V1/Sites/Domain/Post/Action';
import DomainService from 'Services/V1/DomainService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";
import DomainListAction from 'Redux/V1/Domain/Get/DomainGetAction';
function* postDomain(data) {
    try {
        ToastHelper.info();
        const response = yield DomainService.postDomain(
            data.request.form,
            data.request.identity
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PostDomainAction.postDomainSuccess(response.data));
            yield put(DomainListAction.domainGet(data.request.identity));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                PostDomainAction.postDomainFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(PostDomainAction.postDomainFailed());
    }
}

export function* postDomainSaga() {
    yield takeEvery(DOMAIN_ACTION_TYPE.POST_DOMAIN, postDomain);
}
