import CARD from "Redux/V1/Billing/Card/ActionType";

const cardGet = (data) => {
    return {
        type: CARD.CARD_GET,
        request: data,
    };
};

const cardGetSuccess = (data) => {
    return {
        type: CARD.CARD_GET_SUCCESS,
        response: data,
    };
};

const cardGetFailed = (data) => {
    return {
        type: CARD.CARD_GET_FAILED,
        response: data,
    };
};

const CardListAction = {
    cardGet,
    cardGetSuccess,
    cardGetFailed,
};

export default CardListAction;
