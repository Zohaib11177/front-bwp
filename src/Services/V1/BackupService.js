import GATEWAY from 'Services/Gateway';
import V1 from 'Constants/V1ApiConstant';

const snapshotGet = async (data) => {
    const response = await GATEWAY.authGateway(
        'GET',
        V1.site_operation.backup + '?identity=' + data + '&type=1'
    );

    return response;
};

const snapshotPost = async (data) => {
    const response = await GATEWAY.authGateway(
        'POST',
        V1.site_operation.backup + data
    );
    return response;
};
const snapshotRestore = async (data) => {
    const response = await GATEWAY.authGateway(
        'PUT',
        V1.restore.snapshot + data
    );
    return response;
};
const backupGet = async (identity) => {
    let queryParams = window.location.search;
    // queryParams = queryParams.replace('?', '&');
    const response = await GATEWAY.gatewaySiteService(
        'GET',
        // `${V1.site_operation.backup}${identity}`
        // V1.backup.file + '?identity=' + identity
        V1.site_operation.backup +
            '/' +
            identity +
            // identity +
            // "&type=2" +
            queryParams
    );

    return response;
};

const backupPost = async (data) => {
    console.log(data, 'backup post');
    const response = await GATEWAY.authGateway(
        'POST',
        `${V1.backup.create}${data}`
    );
    return response;
};

const backupRestore = async (data) => {
    const _data = backupRestoreBody(data);
    const response = await GATEWAY.authGateway(
        'PUT',
        V1.backup.file_restore + data.identity,
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
    const response = await GATEWAY.authGateway(
        'GET',
        V1.site_operation.backup + '/' + data.identity + '/' + data.backupId
    );
    return response;
};
const BackupService = {
    snapshotPost,
    snapshotGet,
    snapshotRestore,
    backupGet,
    backupPost,
    backupRestore,
    backupDownload,
};
export default BackupService;
