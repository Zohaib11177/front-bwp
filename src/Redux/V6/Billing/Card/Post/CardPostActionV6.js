import CARD from "Redux/V6/Billing/Card/ActionTypeV6";

const cardPost = (data) => {
    return {
        type: CARD.CARD_POST_V6,
        request: data,
    };
};
const cardPostSuccess = (data) => {
    return {
        type: CARD.CARD_POST_V6_SUCCESS,
        response: data,
    };
};
const cardPostFailed = (data) => {
    return {
        type: CARD.CARD_POST_V6_FAILED,
        response: data,
    };
};

const CardAddActionV6 = {
    cardPost,
    cardPostSuccess,
    cardPostFailed,
};

export default CardAddActionV6;
