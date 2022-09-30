import CARD from "Redux/V6/Billing/Card/ActionTypeV6";

const cardPutInfo = (data) => {
    return {
        type: CARD.CARD_PUT_INFO_V6,
        request: data,
    };
};
const cardPutInfoSuccess = (data) => {
    return {
        type: CARD.CARD_PUT_INFO_V6_SUCCESS,
        response: data,
    };
};
const cardPutInfoFailed = (data) => {
    return {
        type: CARD.CARD_PUT_INFO_V6_FAILED,
        response: data,
    };
};

const CardPrimaryActionV6 = {
    cardPutInfo,
    cardPutInfoSuccess,
    cardPutInfoFailed,
};
export default CardPrimaryActionV6;
