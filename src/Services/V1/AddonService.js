import GATEWAY from 'Services/Gateway';
import V1 from 'Constants/V1ApiConstant';
import V3 from 'Constants/V3ApiConstant';

const addonGet = async (identity) => {
    const response = await GATEWAY.authGateway('GET', V1.addon + identity);
    return response;
};
const addonToggle = async (data) => {
    const _data = addonToggleBody(data);
    const response = await GATEWAY.gatewaySiteService(
        'PUT',
        V3.addon + data.identity,
        _data
    );
    return response;
};
const addonToggleBody = (data) => {
    let _data = {};
    _data.product_id = data.product_id;
    _data.status = data.status;
    return JSON.stringify(_data);
};
const AddonService = {
    addonGet,
    addonToggle,
};
export default AddonService;
