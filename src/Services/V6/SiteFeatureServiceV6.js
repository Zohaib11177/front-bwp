import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const accessSharing = async (host) => {
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V6.access_sharing + host
    );
    return response;
};
const Dblogin = (host) => {
    const response = GATEWAY.gatewaySiteService("GET", `${V6.db_login}${host}`);
    return response;
};

const siteSftp = (host) => {
    const response = GATEWAY.gatewaySiteService(
        "PUT",
        `${V6.site_operation.reset_sftp}${host}`
    );
    return response;
};

const siteCloneForm = async (data) => {
    const _data = siteCloneFormBody(data);
    const response = await GATEWAY.gatewaySiteService(
        "PUT",
        V6.clone_form + data.host,
        _data
    );
    return response;
};

const siteCloneFormBody = (data) => {
    let _data = {};
    _data.name = data.domain || "bwp-migration";
    _data.plan_id = parseInt(data.plan);
    _data.product_ids = data.product;
    _data.data_center_id = parseInt(data.region);
    _data.card_id = null;
    _data.site_type = "wordpress";
    return JSON.stringify(_data);
};
const SiteFeatureServiceV6 = {
    accessSharing,
    Dblogin,
    siteSftp,
    siteCloneForm,
};
export default SiteFeatureServiceV6;
