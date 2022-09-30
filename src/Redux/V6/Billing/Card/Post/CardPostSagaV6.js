import { takeEvery, put } from "redux-saga/effects";
import CARD from "Redux/V6/Billing/Card/ActionTypeV6";
import CardServiceV6 from "Services/V6/CardServiceV6";
import CardAddActionV6 from "Redux/V6/Billing/Card/Post/CardPostActionV6";
import ToastHelper from "Helpers/ToastHelper";

function* cardPost(data) {
    try {
        const response = yield CardServiceV6.cardPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            yield put(CardAddActionV6.cardPostFailed(response.error.message));
            ToastHelper.error(response.error.message);
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(CardAddActionV6.cardPostFailed());
    }
}

export function* cardPostSagaV6() {
    yield takeEvery(CARD.CARD_POST_V6, cardPost);
}
