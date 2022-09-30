import { all } from "redux-saga/effects";
import { cardPostSagaV6 } from "Redux/V6/Billing/Card/Post/CardPostSagaV6";
import { cardDeleteSagaV6 } from "Redux/V6/Billing/Card/Delete/CardDeleteSagaV6";
import { cardPutSagaV6 } from "Redux/V6/Billing/Card/Put/CardPutSagaV6";
import { cardPutInfoSagaV6 } from "Redux/V6/Billing/Card/Put Info/CardPutInfoSagaV6";

function* CardRootSagaV6() {
    yield all([cardPostSagaV6(), cardDeleteSagaV6(), cardPutSagaV6() , cardPutInfoSagaV6()]);
}
export default CardRootSagaV6;
