import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";

const cardGet = async () => {
    const response = await GATEWAY.authGateway("GET", V1.billing.card);
    return response;
};

const cardPost = async (data) => {
    const _data = cardPostBody(data);
    const response = await GATEWAY.authGateway("POST", V2.billing.card, _data);
    return response;
};
const cardDelete = async (data) => {
    const response = await GATEWAY.authGateway(
        "DELETE",
        V1.billing.card + "/" + data
    );
    return response;
};

const cardPut = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.billing.card + "/primary/" + data
    );
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
const CARD_SERVICE = {
    cardPost,
    cardGet,
    cardDelete,
    cardPut,
};
export default CARD_SERVICE;
