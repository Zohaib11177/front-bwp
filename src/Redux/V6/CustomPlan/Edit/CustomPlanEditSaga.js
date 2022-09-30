import { takeEvery, put } from "redux-saga/effects"
import CustomPlanEditAction from "Redux/V6/CustomPlan/Edit/CustomPlanEditAction"
import CustomPlanService from "Services/V6/CustomPlanService"
import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"
import ToastHelper from "Helpers/ToastHelper"; 

function* CustomPlanEdit(data) {

    const response = yield CustomPlanService.CustomPlanEdit(data.request)
    if (response.success) {
        ToastHelper.success(response.message);
       
        yield put(CustomPlanEditAction.CustomPlanEditSuccess(response.data))
    } else {
        ToastHelper.error(response.error.message);
        yield put(CustomPlanEditAction.CustomPlanEditFailed(response))
    }

}
function CustomPlanEditSuccess(data) {
    window.location.href = `/white-label`;
}

export function* CustomPlanEditSuccessSaga() {
    yield takeEvery(CUSTOM_PLAN.CUSTOM_PLAN_EDIT_SUCCESS, CustomPlanEditSuccess);
}
export function* CustomPlanEditSaga() {
    yield takeEvery(CUSTOM_PLAN.CUSTOM_PLAN_EDIT, CustomPlanEdit);
}
