import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const unlimitedEdits = async (data) => {
    const _data = unlimitedEditsBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V6.unlimited_edits + data.host,
        _data
    );
    return response;
};
const unlimitedEditsBody = (data) => {
    let _data = {};
    _data.status = data.status;
    return JSON.stringify(_data);
};
const AddonService = {
    unlimitedEdits,
};
export default AddonService;
