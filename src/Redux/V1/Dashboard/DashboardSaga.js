import { takeEvery, put } from "redux-saga/effects";
import DASHBOARD_ACTION_TYPE from "Redux/V1/Dashboard/DashboardActionType";
import DashboardAction from "Redux/V1/Dashboard/DashboardAction";
import DashboardService from "Services/V1/DashboardService";
function* getDashboard() {
    try {
        const response = yield DashboardService.get();
        if (response) {
            yield put(DashboardAction.getDashboardSuccess(response.data));
        } else {
            yield put(
                DashboardAction.getDashboardFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
        yield put(DashboardAction.getDashboardFailed());
    }
}

export function* getDashboardSaga() {
    yield takeEvery(DASHBOARD_ACTION_TYPE.GET_DASHBOARD, getDashboard);
}
