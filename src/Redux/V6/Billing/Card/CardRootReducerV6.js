import { combineReducers } from "redux";
import CardAddReducerV6 from "Redux/V6/Billing/Card/Post/CardPostReducerV6";
import CardPrimaryReducerV6 from "Redux/V6/Billing/Card/Put/CardPutReducerV6";
import CardDeleteReducerV6 from "Redux/V6/Billing/Card/Delete/CardDeleteReducerV6";
import CardPutReducerV6 from "Redux/V6/Billing/Card/Put Info/CardPutInfoReducerV6";

const CardRootReducerV6 = combineReducers({
    cardAdd: CardAddReducerV6,
    cardDelete: CardDeleteReducerV6,
    cardPrimary: CardPrimaryReducerV6,
    cardUpdate : CardPutReducerV6
});
export default CardRootReducerV6;
