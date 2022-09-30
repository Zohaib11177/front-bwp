import { takeEvery, put } from "redux-saga/effects";
import CARD from "Redux/V6/Billing/Card/ActionTypeV6";
import CardPrimaryActionV6 from "Redux/V6/Billing/Card/Put/CardPutActionV6";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import CardServiceV6 from "Services/V6/CardServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* cardPut(data) {
    try {
        ToastHelper.info();
        const response = yield CardServiceV6.cardPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CardPrimaryActionV6.cardPutSuccess(response.data));
            yield put(CardListAction.cardGet(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CardPrimaryActionV6.cardPutFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CardPrimaryActionV6.cardPutFailed());
    }
}

export function* cardPutSagaV6() {
    yield takeEvery(CARD.CARD_PUT_V6, cardPut);
}
