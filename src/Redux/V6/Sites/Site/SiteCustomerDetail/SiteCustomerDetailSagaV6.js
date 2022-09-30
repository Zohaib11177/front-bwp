import { takeEvery, put } from "redux-saga/effects";

import SITE from "Redux/V6/Sites/Site/ActionTypeV6";
import SiteCustomerDetailActionV6 from "Redux/V6/Sites/Site/SiteCustomerDetail/SiteCustomerDetailActionV6";
import CustomerDetailServiceV6 from "Services/V6/CustomerDetailServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* siteCustomerDetail(data) {
    try {
        const response = yield CustomerDetailServiceV6.getCustomerDetail(data.request);
        if (response.success) {
            yield put(SiteCustomerDetailActionV6.siteCustomerDetailSuccess(response.data));
        } else {
            yield put(SiteCustomerDetailActionV6.siteCustomerDetailFailed(response.error.message));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* SiteCustomerDetailSagaV6() {
    yield takeEvery(SITE.SITE_CUSTOMER_DETAIL_V6, siteCustomerDetail);
}
