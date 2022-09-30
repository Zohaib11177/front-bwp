import GATEWAY from 'Services/Gateway';
import V1 from 'Constants/V1ApiConstant';

const nitroFirst = async (data) => {
    const response = await GATEWAY.authGateway('GET', V1.nitro.details + data);
    return response;
};
const nitroEnable = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        'PUT',
        'v1/sites/nitro/enable/' + data
    );
    return response;
};
const nitroDisable = async (data) => {
    const response = await GATEWAY.authGateway('GET', V1.nitro.disable + data);
    return response;
};
const NitroService = {
    nitroFirst,
    nitroEnable,
    nitroDisable,
};
export default NitroService;
