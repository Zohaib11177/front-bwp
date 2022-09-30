import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const backupGet = async (domain) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        V6.site_operation.backup + domain
    );

    return response;
};

const backupDownload = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "GET",
        `${V6.site_operation.download_backup}${data.host}?backup_id=${data.backupId}&type=${data.type}`
    );
    return response;
};

const backupRestore = async (data) => {
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        `${V6.site_operation.restore_backup}${data.host}?backup_id=${data.backupId}&type=${data.type.toLowerCase()}`
    );
    return response;
};

const BackupServiceV6 = {
    backupGet,
    backupDownload,
    backupRestore
};
export default BackupServiceV6;
