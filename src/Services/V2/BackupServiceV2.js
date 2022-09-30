import GATEWAY from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";
import V1 from "Constants/V1ApiConstant";

const backupPost = async (data) => {
    const response = await GATEWAY.authGateway(
        "POST",
        `${V2.backup.backup}${data}`
    );
    return response;
};

const backupRestore = async (data) => {
    const _data = backupRestoreBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V2.backup.backup + data.identity,
        _data
    );
    return response;
};
const backupRestoreBody = (data) => {
    let _data = {};
    _data.backup_id = data.backupId;
    return JSON.stringify(_data);
};
const backupDownload = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        `${V1.site_operation.backup}/${data.identity}/${data.backupId}/${data.type}`
    );
    return response;
};
const BackupServiceV2 = {
    backupPost,
    backupRestore,
    backupDownload,
};
export default BackupServiceV2;
