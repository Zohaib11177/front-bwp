import { takeEvery, put } from "redux-saga/effects";
import CARD from "Redux/V1/Billing/Card/ActionType";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import CardService from "Services/V1/CardService";

function* cardGet(data) {
    try {
        const response = yield CardService.cardGet(data.request);
        if (response.success) {
            yield put(CardListAction.cardGetSuccess(response.data));
        } else {
            yield put(CardListAction.cardGetSuccess(response.error.message));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* cardGetSaga() {
    yield takeEvery(CARD.CARD_GET, cardGet);
}
