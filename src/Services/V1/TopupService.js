import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const topupPut = async (data) => {
    const _data = topupBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.top_up + data.card_id,
        _data
    );
    return response;
};
const topupBody = (data) => {
    let _data = {};
    _data.amount = data.amount;
    return JSON.stringify(_data);
};
const TopupServiceService = {
    topupPut,
};
export default TopupServiceService;
