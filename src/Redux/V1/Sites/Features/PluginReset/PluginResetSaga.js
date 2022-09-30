import { takeEvery, put } from 'redux-saga/effects';
import FEATURE from 'Redux/V1/Sites/Features/ActionType';
import PluginResetAction from 'Redux/V1/Sites/Features/PluginReset/PluginResetAction';
import SiteFeatureService from 'Services/V1/SiteFeatureService';
import ToastHelper from 'Helpers/ToastHelper';
// import SiteDashboardBusiness from "Businesses/SiteDetails/SiteDashboardBusiness";

function* pluginReset(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.pluginReset(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PluginResetAction.pluginResetSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                PluginResetAction.pluginResetFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(PluginResetAction.pluginResetFailed());
    }
}

export function* PluginResetSaga() {
    yield takeEvery(FEATURE.PLUGIN_RESET, pluginReset);
}
