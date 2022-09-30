import { takeEvery, put } from 'redux-saga/effects';
import CARD from 'Redux/V1/Billing/Card/ActionType';
import CardService from 'Services/V1/CardService';
import CardAddAction from 'Redux/V1/Billing/Card/Post/CardPostAction';
// import PaymentBusiness from "Businesses/PaymentBusiness";
import ToastHelper from 'Helpers/ToastHelper';

function* cardPost(data) {
    try {
        const response = yield CardService.cardPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            yield put(CardAddAction.cardPostFailed(response.error.message));
            ToastHelper.error(response.error.message);
        }
    } catch (error) {
        ToastHelper.error(
            'Something went wrong and we have been notified about the problem'
        );
        yield put(CardAddAction.cardPostFailed());
    }
}

export function* cardPostSaga() {
    yield takeEvery(CARD.CARD_POST, cardPost);
}
