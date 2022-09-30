import { takeEvery, put } from "redux-saga/effects";
import CARD from "Redux/V6/Billing/Card/ActionTypeV6";
import CardPutInfoActionV6 from "Redux/V6/Billing/Card/Put Info/CardPutInfoActionV6";
import CardServiceV6 from "Services/V6/CardServiceV6";
import ToastHelper from "Helpers/ToastHelper";

function* cardPutInfo(data) {
    try {
        ToastHelper.info();
        const response = yield CardServiceV6.cardPutInfo(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CardPutInfoActionV6.cardPutInfoSuccess(response.data));
            window.location.href = "/billing"
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                CardPutInfoActionV6.cardPutInfoFailed(response.error.message)
            );
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CardPutInfoActionV6.cardPutInfoFailed());
    }
}

export function* cardPutInfoSagaV6() {
    yield takeEvery(CARD.CARD_PUT_INFO_V6, cardPutInfo);
}
