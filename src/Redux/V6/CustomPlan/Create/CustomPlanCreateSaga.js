import { takeEvery, put } from "redux-saga/effects"
import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"
import CustomPlanCreateAction from "Redux/V6/CustomPlan/Create/CustomPlanCreateAction"
import CustomPlanService from "Services/V6/CustomPlanService"
import ToastHelper from "Helpers/ToastHelper"; 


function* CustomPlanCreate(data) {
    const response = yield CustomPlanService.CustomPlanPost(data.request)
    if (response.success) {
        ToastHelper.success(response.message);
        yield put(CustomPlanCreateAction.CustomPlanCreateSuccess(response))
    } else {
        ToastHelper.error(response.error.message);
        yield put(CustomPlanCreateAction.CustomPlanCreateFailed(response))
    }
}

function CustomPlanCreateSuccess(data) {

    window.location.href = `/white-label`;
    
}

export function* CustomPlanCreateSuccessSaga() {
    yield takeEvery(CUSTOM_PLAN.CUSTOM_PLAN_CREATE_SUCCESS, CustomPlanCreateSuccess);
}

export function* CustomPlanCreateSaga() {
    yield takeEvery(CUSTOM_PLAN.CUSTOM_PLAN_CREATE, CustomPlanCreate);
}
