import React from "react";

const generate = (data, cardId, getCard) => {
    let primaryCardId;
    const cardLists = data.map((card) => {
        if (card.is_primary === true) {
            primaryCardId = card.id;
        }
        return <option value={card.id}>{card.number}</option>;
    });
    if (!cardId) getCard(primaryCardId);
    return cardLists;
};
const InvoiceBusiness = {
    generate,
};

export default InvoiceBusiness;
