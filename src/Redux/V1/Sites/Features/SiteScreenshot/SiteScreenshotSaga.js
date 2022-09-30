import { takeEvery, put } from "redux-saga/effects";
import FEATURE from "Redux/V1/Sites/Features/ActionType";
import SiteScreenshotAction from "Redux/V1/Sites/Features/SiteScreenshot/SiteScreenshotAction";
import SiteDetailAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import SiteListAction from "Redux/V1/Sites/Site/Get/SiteGetAction";
import SiteFeatureService from "Services/V1/SiteFeatureService";
import ToastHelper from "Helpers/ToastHelper";

function* siteScreenshot(data) {
    try {
        ToastHelper.info();
        const response = yield SiteFeatureService.siteScreenshot(
            data.request.identity
        );
        if (response.success) {
            // ToastHelper.success(response.message);
            yield put(
                SiteScreenshotAction.siteScreenshotSuccess(response.data)
            );

            if (data.request.host) {
                yield put(SiteDetailAction.getSiteDetail(data.request.host));
            } else {
                yield put(SiteListAction.siteGet());
            }
        } else {
            // ToastHelper.error(response.error.message);
            yield put(
                SiteScreenshotAction.siteScreenshotFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteScreenshotAction.siteScreenshotFailed());
    }
}

export function* SiteScreenshotSaga() {
    yield takeEvery(FEATURE.SITE_SCREENSHOT, siteScreenshot);
}
