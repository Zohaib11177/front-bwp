import CARD from "Redux/V1/Billing/Card/ActionType";

const cardDelete = (data) => {
    return {
        type: CARD.CARD_DELETE,
        request: data,
    };
};
const cardDeleteSuccess = (data) => {
    return {
        type: CARD.CARD_DELETE_SUCCESS,
        response: data,
    };
};
const cardDeleteFailed = (data) => {
    return {
        type: CARD.CARD_DELETE_FAILED,
        response: data,
    };
};

const CardDeleteAction = {
    cardDelete,
    cardDeleteSuccess,
    cardDeleteFailed,
};
export default CardDeleteAction;
