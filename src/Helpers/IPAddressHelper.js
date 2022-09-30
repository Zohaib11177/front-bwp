import Gateway from "Services/Gateway";

const ipInfo = async (data) => {
    const api = "https://json.geoiplookup.io/";
    const response = await Gateway.thirdPartyGateway("GET", api);
    return response;
};

const IP = {
    ipInfo,
};

export default IP;
