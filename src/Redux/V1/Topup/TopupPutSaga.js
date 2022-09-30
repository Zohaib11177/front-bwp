import { takeEvery, put } from "redux-saga/effects";
import TOPUP from "Redux/V1/Topup/ActionTypes";
import TopupAction from "Redux/V1/Topup/TopupPutAction";
import TopupService from "Services/V1/TopupService";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import ToastHelper from "Helpers/ToastHelper";

function* topup(data) {
    let wallet;

    try {
        ToastHelper.info();
        const response = yield TopupService.topupPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(TopupAction.topupPutSuccess(response.data));
            yield put(CardListAction.cardGet());
            wallet = JSON.parse(localStorage.getItem("wallet"));
            wallet.current_balance = response.data.wallet.current_balance;
            localStorage.setItem("wallet", JSON.stringify(wallet));
        } else {
            ToastHelper.error(response.error.message);
            yield put(TopupAction.topupPutFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error(
            "Something went wrong and we have been notified about the problem"
        );
        yield put(TopupAction.topupPutFailed());
    }
}

export function* topupSaga() {
    yield takeEvery(TOPUP.TOPUP_PUT, topup);
}
