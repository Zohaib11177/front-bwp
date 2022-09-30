import CARD from "Redux/V1/Billing/Card/ActionType";

const cardPost = (data) => {
    return {
        type: CARD.CARD_POST,
        request: data,
    };
};
const cardPostSuccess = (data) => {
    return {
        type: CARD.CARD_POST_SUCCESS,
        response: data,
    };
};
const cardPostFailed = (data) => {
    return {
        type: CARD.CARD_POST_FAILED,
        response: data,
    };
};

const CardAddAction = {
    cardPost,
    cardPostSuccess,
    cardPostFailed,
};

export default CardAddAction;
