import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";

const nerdMode = async (data) => {
    const response = await GATEWAY.authGateway("GET", V2.settings.nerd_mode);
    return response;
};

const servicesGet = async (data) => {
    const response = await GATEWAY.authGateway("GET", V1.services);
    return response;
};

const whiteLabelToggle = async () => {
    const response = await GATEWAY.authGateway("PUT", `${V1.services}1`);
    return response;
};

const whiteLabelGet = async (data) => {
    const response = await GATEWAY.authGateway(
        "GET",
        V1.settings.whiteLabelGet + data
    );
    return response;
};

const whiteLabelPost = async (data) => {
    const _data = whiteLabelPostBody(data);
    const response = await GATEWAY.authGateway(
        "POST",
        V1.settings.whiteLabelPost,
        _data
    );
    return response;
};

const whiteLabelPostBody = (data) => {
    let _data = {};
    if (data.logo !== null) {
        _data.logo = data.logo_default;
    }
    _data.agency_name = data.agency_name;
    _data.plugin_name = data.plugin_name;
    _data.primary_color = data.primary_color;
    // _data.secondary_color = data.secondary_color;
    _data.service_id = 1;

    return JSON.stringify(_data);
};

const SETTINGS_SERVICE = {
    nerdMode,
    servicesGet,
    whiteLabelToggle,
    whiteLabelGet,
    whiteLabelPost,
};
export default SETTINGS_SERVICE;
