import { takeEvery, put } from "redux-saga/effects";
import CARD from "Redux/V6/Billing/Card/ActionTypeV6";
import CardDeleteActionV6 from "Redux/V6/Billing/Card/Delete/CardDeleteActionV6";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import CardServiceV6 from "Services/V6/CardServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* cardDelete(data) {
    try {
        ToastHelper.info();
        const response = yield CardServiceV6.cardDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CardDeleteActionV6.cardDeleteSuccess(response.data));
            yield put(CardListAction.cardGet(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CardDeleteActionV6.cardDeleteFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CardDeleteActionV6.cardDeleteFailed());
    }
}

export function* cardDeleteSagaV6() {
    yield takeEvery(CARD.CARD_DELETE_V6, cardDelete);
}
