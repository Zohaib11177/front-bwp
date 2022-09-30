import CARD from "Redux/V1/Billing/Card/ActionType";

const cardPut = (data) => {
    return {
        type: CARD.CARD_PUT,
        request: data,
    };
};
const cardPutSuccess = (data) => {
    return {
        type: CARD.CARD_PUT_SUCCESS,
        response: data,
    };
};
const cardPutFailed = (data) => {
    return {
        type: CARD.CARD_PUT_FAILED,
        response: data,
    };
};

const CardPrimaryAction = {
    cardPut,
    cardPutSuccess,
    cardPutFailed,
};
export default CardPrimaryAction;
