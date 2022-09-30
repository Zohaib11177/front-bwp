import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SitePlanActionV6 from "Redux/V6/Sites/Site/SitePlan/SitePlanActionV6";
import PlanServiceV6 from "Services/V6/SiteLaunchServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* sitePlan() {
    try {
        const response = yield PlanServiceV6.getPlans();
        if (response.success) {
            yield put(SitePlanActionV6.sitePlanSuccess(response.data));
        } else {
            yield put(SitePlanActionV6.sitePlanFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SitePlanSagaV6() {
    yield takeEvery(SITE.SITE_PLAN_V6, sitePlan);
}
