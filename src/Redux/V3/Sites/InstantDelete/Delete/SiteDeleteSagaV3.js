import { takeEvery, put } from "redux-saga/effects";
import INSTANT from "Redux/V3/Sites/InstantDelete/SiteDeleteRootActionTypeV3";
import InstantDeleteActionV3 from "Redux/V3/Sites/InstantDelete/Delete/SiteDeleteActionV3";
import SiteInstantDeleteServiceV3 from "Services/V3/InstantDeleteService";
// import SiteAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import ToastHelper from "Helpers/ToastHelper";
// import { siteDetail } from 'Redux/V3/Sites/SiteDetail/SiteDetailAction';

function* instantDelete(data) {
    try {
        ToastHelper.info();
        const response = yield SiteInstantDeleteServiceV3.instantDeleteV3(data.request);
        console.log(data.request)
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                InstantDeleteActionV3.instantDeleteSuccess(response.data)
            );
            setTimeout(() => {
                console.log("data response", data.request)
                console.log("data response", data.request.primary_domain);
                // window.location.href =`/sites/${data.request.primary_domain}`
            },3000)
            // yield put(SiteAction.getSiteDetail(data.request.host));
            // yield put(siteDetail(data.request.host));
            // window.location.replace(`${base_url}${data.request.primary_domain}`)
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                InstantDeleteActionV3.instantDeleteFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        InstantDeleteActionV3.instantDeleteFailed();
    }
}

export function* InstantDeleteSagaV3() {
    yield takeEvery(INSTANT.INSTANT_DELETE_V3, instantDelete);
}
