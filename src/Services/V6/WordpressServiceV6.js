import GATEWAY from "Services/Gateway";

import V6 from "Constants/V6ApiConstant";

const wordpressUpdate = async (data) => {
    const _data = wordpressUpdateBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V6.wordpress.update + data.slug,
        _data
    );
    return response;
};
const wordpressUpdateBody = (data) => {
    let _data = {};
    _data.type = data.type;
    _data.identities = data.identities;
    return JSON.stringify(_data);
};

const wordpressLock = async (data) => {
    const _data = wordpressLockBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V6.wordpress.lock + data.host,
        _data
    );
    return response;
};
const wordpressLockBody = (data) => {
    let _data = {};
    _data.slug = data.slug;
    return JSON.stringify(_data);
};

const wordpressRefresh = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        `${V6.wordpress.updates_on_icon}${data}`
    );
    return response;
};

const WordpressServiceV6 = {
    wordpressUpdate,
    wordpressLock,
    wordpressRefresh,
};
export default WordpressServiceV6;
