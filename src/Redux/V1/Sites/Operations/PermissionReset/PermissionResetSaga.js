import { takeEvery, put } from 'redux-saga/effects';
import OPERATION from 'Redux/V1/Sites/Operations/ActionType';
import SiteOperationService from 'Services/V1/SiteOperationService';
import ToastHelper from 'Helpers/ToastHelper';
import PermissionResetAction from './PermissionResetAction';
// import SiteOperationsBusiness from "Businesses/SiteDetails/SiteOperationsBusiness";

function* permissionReset(data) {
    try {
        ToastHelper.info();
        const response = yield SiteOperationService.permissionReset(
            data.request
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PermissionResetAction.permissionResetSuccess());
        } else {
            ToastHelper.error(response.error.message);
            yield put(PermissionResetAction.permissionResetFailed());
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(PermissionResetAction.permissionResetFailed());
    }
}

export function* PermissionResetSaga() {
    yield takeEvery(OPERATION.PERMISSION_RESET, permissionReset);
}
