import CARD from "Redux/V1/Billing/Card/ActionType";

const CardListReducer = (
    state = {
        loading: false,
        success: false,
        card_list: [],
        primary_card: {},
        wallet: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case CARD.CARD_GET:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case CARD.CARD_GET_SUCCESS:
            const primary_card = filterPrimaryCard(action.response.cards);
            return {
                ...state,
                loading: false,
                card_list: action.response.cards,
                wallet: action.response.wallet,
                primary_card,
                success: true,
            };
        case CARD.CARD_GET_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

const filterPrimaryCard = (cards) => {
    const primaryCard = cards.filter((card) => {
        return card.is_primary === true;
    });

    return primaryCard.length > 0 ? primaryCard[0] : {};
};

export default CardListReducer;
