import { takeEvery, put } from 'redux-saga/effects';
import SITE_WHITE_LABEL from "Redux/V6/Sites/SiteWhiteLabel/ActionTypeV6";
import SiteWLGetActionV6 from 'Redux/V6/Sites/SiteWhiteLabel/Get/SiteWLGetActionV6';
import SiteWLServiceV6 from 'Services/V6/SiteWhiteListV6';
import ToastHelper from 'Helpers/ToastHelper';

function* siteWLGet(data) {
    try {
        ToastHelper.info();
        const response = yield SiteWLServiceV6.siteWLGet();
        console.log(response , "sgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(SiteWLGetActionV6.siteWLGetSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                SiteWLGetActionV6.siteWLGetFailed()
            );
        }
    } catch (error) {
        console.log(error)
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(SiteWLGetActionV6.siteWLGetFailed());
    }
}

export function* siteWLGetSagaV6() {
    yield takeEvery(SITE_WHITE_LABEL.SITE_WHITE_LABEL_GET_V6, siteWLGet);
}
