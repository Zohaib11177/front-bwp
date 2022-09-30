import { takeEvery, put } from "redux-saga/effects";
import CARD from "Redux/V1/Billing/Card/ActionType";
import CardDeleteAction from "Redux/V1/Billing/Card/Delete/CardDeleteAction";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import CardService from "Services/V1/CardService";
import ToastHelper from "Helpers/ToastHelper";

function* cardDelete(data) {
    try {
        ToastHelper.info();
        const response = yield CardService.cardDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CardDeleteAction.cardDeleteSuccess(response.data));
            yield put(CardListAction.cardGet(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CardDeleteAction.cardDeleteFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CardDeleteAction.cardDeleteFailed());
    }
}

export function* cardDeleteSaga() {
    yield takeEvery(CARD.CARD_DELETE, cardDelete);
}
