import CARD from "Redux/V6/Billing/Card/ActionTypeV6";

const cardPut = (data) => {
    return {
        type: CARD.CARD_PUT_V6,
        request: data,
    };
};
const cardPutSuccess = (data) => {
    return {
        type: CARD.CARD_PUT_V6_SUCCESS,
        response: data,
    };
};
const cardPutFailed = (data) => {
    return {
        type: CARD.CARD_PUT_V6_FAILED,
        response: data,
    };
};

const CardPrimaryActionV6 = {
    cardPut,
    cardPutSuccess,
    cardPutFailed,
};
export default CardPrimaryActionV6;
