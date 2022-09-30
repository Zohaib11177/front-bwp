import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";

const postCard = async (data) => {
    const _data = cardBody(data);
    const response = await GATEWAY.authGateway("POST", V2.billing.card, _data);
    return response;
};

const getCards = async () => {
    const response = await GATEWAY.authGateway("GET", V1.billing.card);
    return response;
};

const cardBody = (data) => {
    let _data = {};
    _data.card_number = data.card_number.toString();
    _data.exp_month = data.exp_month.toString();
    _data.exp_year = data.exp_year.toString();
    _data.cvc = data.cvc.toString();
    _data.name = data.name;
    _data.is_primary = data.is_primary;
    return JSON.stringify(_data);
};
const CreditCardService = {
    postCard,
    getCards,
};
export default CreditCardService;
