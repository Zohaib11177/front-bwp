import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const cardPost = async (data) => {
    const _data = cardPostBody(data);
    const response = await GATEWAY.authGateway("POST", V6.billing.card, _data);
    return response;
};
const cardDelete = async (data) => {
    const response = await GATEWAY.authGateway(
        "DELETE",
        V6.billing.card + "/" + data
    );
    return response;
};

const cardPut = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V6.billing.card + "/primary/" + data
    );
    return response;
};

const cardPutInfo = async (data) => {
    console.log(data)
    const _data = cardPutBody(data);
    console.log(_data)
    const response = await GATEWAY.authGateway("PUT", V6.billing.updateCard + "/" + data.id , _data);
    return response;
};

const cardPostBody = (data) => {
    let _data = {};
    _data.card_number = data.card_number.toString();
    _data.exp_month = parseInt(data.exp_month);
    _data.exp_year = parseInt(data.exp_year);
    _data.cvc = data.cvc.toString();
    _data.name = data.name;
    _data.is_primary = data.is_primary;
    return JSON.stringify(_data);
};

const cardPutBody = (data) => {
    let _data = {};
    _data.card_number = data.card_number.toString();
    _data.exp_month = parseInt(data.exp_month);
    _data.exp_year = parseInt(data.exp_year);
    _data.cvc = data.cvc.toString();
    _data.name = data.holder_name;
    _data.is_primary = data.is_primary;
    return JSON.stringify(_data);
};

const CardServiceV6 = {
    cardPost,
    cardDelete,
    cardPut,
    cardPutInfo
};
export default CardServiceV6;
