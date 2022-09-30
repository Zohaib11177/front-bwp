import CARD from "Redux/V6/Billing/Card/ActionTypeV6";

const cardDelete = (data) => {
    return {
        type: CARD.CARD_DELETE_V6,
        request: data,
    };
};
const cardDeleteSuccess = (data) => {
    return {
        type: CARD.CARD_DELETE_V6_SUCCESS,
        response: data,
    };
};
const cardDeleteFailed = (data) => {
    return {
        type: CARD.CARD_DELETE_V6_FAILED,
        response: data,
    };
};

const CardDeleteActionV6 = {
    cardDelete,
    cardDeleteSuccess,
    cardDeleteFailed,
};
export default CardDeleteActionV6;
