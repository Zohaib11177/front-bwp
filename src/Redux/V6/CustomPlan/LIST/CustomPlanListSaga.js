import { takeEvery, put } from "redux-saga/effects"
import CustomPlanListAction from "Redux/V6/CustomPlan/LIST/CustomPlanListAction"
import CustomPlanService from "Services/V6/CustomPlanService"
import CUSTOM_PLAN from "Redux/V6/CustomPlan/ActionTypes"

function* CustomPlanList(data) {
    const response = yield CustomPlanService.CustomPlanList()
    if (response.success) {
        yield put(CustomPlanListAction.CustomPlanListSuccess(response.data))
    } else {
        yield put(CustomPlanListAction.CustomPlanListFailed(response))
    }
}
export function* CustomPlanListSaga() {
    yield takeEvery(CUSTOM_PLAN.CUSTOM_PLAN_LIST, CustomPlanList);
}
