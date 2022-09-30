import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import V2 from "Constants/V2ApiConstant";

const wordpressGet = async (data) => {
    const response = await GATEWAY.authGateway(
        "GET",
        V1.wordpress.details + data
    );
    return response;
};
const wordpressUpdate = async (data) => {
    const _data = wordpressUpdateBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.wordpress.update + data.identity,
        _data
    );
    return response;
};
const wordpressUpdateBody = (data) => {
    let _data = {};
    _data.type = data.type;
    _data.name = data.slug;
    return JSON.stringify(_data);
};
const wordpressLock = async (data) => {
    const _data = wordpressLockBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.wordpress.lock + data.identity,
        _data
    );
    return response;
};
const wordpressLockBody = (data) => {
    let _data = {};
    _data.slug = data.slug;
    return JSON.stringify(_data);
};

const wordpressContainer = async () => {
    let query = window.location.search;
    const response = await GATEWAY.authGateway(
        "GET",
        V2.wordpress.update_all + query
    );
    return response;
};

const wordpressUpdateAll = async (data) => {
    const _data = { identity: data };
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.wordpress.update_all_containers,
        JSON.stringify(_data)
    );
    return response;
};

const wordpressRefresh = async (data) => {
    const response = await GATEWAY.authGateway(
        "GET",
        `${V1.wordpress.updates_on_icon}${data}`
    );
    return response;
};

const wordpressContainerV1 = async (data) => {
    let query = window.location.search;
    const response = await GATEWAY.authGateway(
        "GET",
        V1.wordpress.updates_all_v1 + data + query
    );
    return response;
};

const wordpressUpdateAllV1 = async (data) => {
    const _data = wordpressBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.wordpress.updates_all_v1 + data.slug,
        _data
    );
    return response;
};

const wordpressBody = (data) => {
    let _data = {};
    _data.type = data.type;
    _data.identities = data.identity;
    return JSON.stringify(_data);
};
const wordpressTimeline = async (data) => {
    let query = window.location.search;
    const response = await GATEWAY.authGateway(
        "GET",
        V1.wordpress.timeline + data + query
    );
    return response;
};

const WordpressService = {
    wordpressGet,
    wordpressUpdate,
    wordpressLock,
    wordpressContainer,
    wordpressUpdateAll,
    wordpressRefresh,
    wordpressContainerV1,
    wordpressUpdateAllV1,
    wordpressTimeline,
};
export default WordpressService;
