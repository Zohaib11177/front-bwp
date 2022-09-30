import { takeEvery, put } from 'redux-saga/effects';

import FORCE from 'Redux/V1/ForceRedirect/ActionTypes';
import ForceRedirectAction from 'Redux/V1/ForceRedirect/ForcePutActions';
import ForceRedirectService from 'Services/V1/ForceRedirectService';

import ToastHelper from 'Helpers/ToastHelper';
// import SiteAddonsBusiness from "Businesses/SiteDetails/SiteAddonsBusiness";

function* forceRedirect(data) {
    try {
        ToastHelper.info();
        const response = yield ForceRedirectService.forcePut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(ForceRedirectAction.forcePutSuccess(response.data));

            // const operation = response.data.container.isForced
            //     ? "Enabled"
            //     : "Disabled";

            window.location.href =
                '/sites/addon/' + response.data.container.primary_domain_name;
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                ForceRedirectAction.forcePutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(ForceRedirectAction.forcePutFailed());
    }
}

export function* forceRedirectSaga() {
    yield takeEvery(FORCE.FORCE_PUT, forceRedirect);
}
