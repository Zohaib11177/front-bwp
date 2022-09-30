import { all } from "redux-saga/effects";
import { cardGetSaga } from "Redux/V1/Billing/Card/Get/CardGetSaga";
import { cardPostSaga } from "Redux/V1/Billing/Card/Post/CardPostSaga";
import { cardDeleteSaga } from "Redux/V1/Billing/Card/Delete/CardDeleteSaga";
import { cardPutSaga } from "Redux/V1/Billing/Card/Put/CardPutSaga";

function* CardRootSaga() {
    yield all([cardGetSaga(), cardPostSaga(), cardDeleteSaga(), cardPutSaga()]);
}
export default CardRootSaga;
