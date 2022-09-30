import { takeEvery, put } from "redux-saga/effects"
import STRIPE from "Redux/V6/Stripe/ActionTypes"
import StripeCreateAction from "Redux/V6/Stripe/Create/StripeCreateAction"
import StripeService from "Services/V6/StripeService"
import ToastHelper from "Helpers/ToastHelper"; 


function* StripeCreate(data) {
    const response = yield StripeService.StripePost(data.request)
    if (response.success) {
        ToastHelper.success(response.message);
        yield put(StripeCreateAction.StripeCreateSuccess(response))
    } else {
        ToastHelper.error(response.error.message);
        yield put(StripeCreateAction.StripeCreateFailed(response))
    }
}

function StripeCreateSuccess(data) {
    window.location.href = `/white-label`;
}

export function* StripeCreateSuccessSaga() {
    yield takeEvery(STRIPE.STRIPE_CREATE_SUCCESS, StripeCreateSuccess);
}

export function* StripeCreateSaga() {
    yield takeEvery(STRIPE.STRIPE_CREATE, StripeCreate);
}
