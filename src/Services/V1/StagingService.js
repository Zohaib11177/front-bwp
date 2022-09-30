import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const stagingPost = async (data) => {
    const _data = stagingPostBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "POST",
        V1.staging + "/" + data,
        _data
    );
    return response;
};
const stagingDelete = async (data) => {
    const response = await GATEWAY.authGateway(
        "DELETE",
        V1.staging_delete + data
    );
    return response;
};
const syncPut = async (data) => {
    const _data = syncPutBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.sync_environment + data.parent_identity,
        _data
    );
    return response;
};
const syncPutBody = (data) => {
    let _data = {};
    _data.staging_identity = data.staging_identity;
    _data.environment = data.environment;
    _data.action = data.action;
    return JSON.stringify(_data);
};
const stagingPostBody = (data) => {
    let _data = {};
    _data.source_identity = data;
    return JSON.stringify(_data);
};
const stagingRenewal = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.staging_renewal + data
    );
    return response;
};
const stagingLogs = async (data) => {
    let query = window.location.search;
    const response = await GATEWAY.authGateway(
        "GET",
        V1.staging_logs + data + query
    );
    return response;
};

const syncPushEnv = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V1.staging + '/' + data
    );
    return response;
};

const StagingService = {
    stagingPost,
    stagingDelete,
    syncPut,
    stagingRenewal,
    stagingLogs,
    syncPushEnv,
};
export default StagingService;
