import { takeEvery, put } from "redux-saga/effects"
import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"
import CustomPlanDeleteAction from "Redux/V6/CustomPlan/Delete/CustomPlanDeleteAction"
import CustomPlanService from "Services/V6/CustomPlanService"
import ToastHelper from "Helpers/ToastHelper"; 


function* CustomPlanDelete(data) {
    const response = yield CustomPlanService.CustomPlanDelete(data.request)
    if (response.success) {

        ToastHelper.success(response.message);
        yield put(CustomPlanDeleteAction.CustomPlanDeleteSuccess(response))
    } else {
        ToastHelper.error(response.error.message);
        yield put(CustomPlanDeleteAction.CustomPlanDeleteFailed(response))
    }
}
function CustomPlanDeleteSuccess(data) {
    window.location.href = `/white-label`;
}
export function* CustomPlanDeleteSuccessSaga() {
    yield takeEvery(CUSTOM_PLAN.CUSTOM_PLAN_DELETE_SUCCESS, CustomPlanDeleteSuccess);
}
export function* CustomPlanDeleteSaga() {
    yield takeEvery(CUSTOM_PLAN.CUSTOM_PLAN_DELETE, CustomPlanDelete);
}
