import { takeEvery, put } from "redux-saga/effects";
import CARD from "Redux/V1/Billing/Card/ActionType";
import CardPrimaryAction from "Redux/V1/Billing/Card/Put/CardPutAction";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import CardService from "Services/V1/CardService";
import ToastHelper from "Helpers/ToastHelper";

function* cardPut(data) {
    try {
        ToastHelper.info();
        const response = yield CardService.cardPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CardPrimaryAction.cardPutSuccess(response.data));
            yield put(CardListAction.cardGet(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(CardPrimaryAction.cardPutFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CardPrimaryAction.cardPutFailed());
    }
}

export function* cardPutSaga() {
    yield takeEvery(CARD.CARD_PUT, cardPut);
}
