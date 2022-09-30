import Gateway from 'Services/Gateway';
import V1 from 'Constants/V1ApiConstant';
// import V2 from "Constants/V2ApiConstant";
// import V5 from "Constants/V5ApiConstant";
// import UsernameHelper from "Helpers/UsernameHelper";
// import PasswordHelper from "Helpers/PasswordHelper";

const siteGet = (data) => {
    let query = window.location.search;
    if (data !== undefined) {
        query = `?page=${1}&page_limit=${data.page_limit}&search=${
            data.search
        }`;
    }
    const response = Gateway.gatewaySiteService('GET', V1.sites + query);
    return response;
};

const sitePost = (data) => {
    const _data = sitePostBody(data);
    const response = Gateway.gatewaySiteService('POST', V1.sites, _data);
    return response;
};

const sitePostBody = (data) => {
    let _data = {},
        migrationData = {};
    _data.name = data.wp.title || 'bwp-migration';
    // _data.wp_username = data.wp.username || UsernameHelper.generateUserName();
    // _data.wp_password = data.wp.password || PasswordHelper.generatePassword(12);
    // _data.wp_email = data.wp.email || UsernameHelper.getUserEmail();
    _data.plan_id = parseInt(data.wp.plan);
    _data.suggested_identity = data.wp.title;
    _data.site_type = 'wordpress';
    _data.card_id = data.card_id;
    _data.product_ids = data.addons;
    _data.data_center_id = data.wp.region;
    _data.site_db_id = parseInt(data.wp.database);
    if (data.wp.is_migration === true) {
        _data.is_migration = true;
        migrationData.mi_wp_username = data.wp.wp_admin_user;
        migrationData.mi_wp_password = data.wp.wp_admin_password;
        migrationData.mi_wp_url = data.wp.wp_admin_url;
        migrationData.mi_host = data.wp.current_host_name;
        migrationData.mi_host_username = data.wp.current_host_username;
        migrationData.mi_host_password = data.wp.current_host_password;
        migrationData.mi_server_type = data.wp.select_ftp_sftp;
        migrationData.mi_server_port = data.wp.port;
        migrationData.mi_server_location = data.wp.host_location;
        migrationData.mi_server_username = data.wp.mi_username;
        migrationData.mi_server_password = data.wp.mi_password;
        migrationData.mi_multiple_site = data.wp.multi_site;
        migrationData.mi_important_directories = data.wp.important_dir_root;
        migrationData.mi_agency_name = data.wp.agency_name;
        migrationData.mi_domain_url = data.wp.domain_url;
        migrationData.mi_domain_username = data.wp.domain_username;
        migrationData.mi_domain_password = data.wp.domain_password;
        migrationData.mi_desciption = data.wp.hear_about_us;
        migrationData.mi_staging_first = data.wp.mi_staging;
        migrationData.mi_directories = data.wp.mi_directories;
        migrationData.website_url = data.wp.website_url;
        migrationData.migration_notes = data.wp.migration_notes;
        _data = {
            ..._data,
            ...migrationData,
        };
    }

    return JSON.stringify(_data);
};

const siteDelete = (identity) => {
    const response = Gateway.gatewaySiteService(
        'DELETE',
        `${V1.site_operation.site_delete}${identity}`
    );
    console.log(V1.site_operation);
    return response;
};

const siteDeleteCancel = async (identity) => {
    const response = await Gateway.authGateway(
        'PUT',
        `${V1.site_operation.site_delete_cancel}${identity}`
    );
    return response;
};

const siteRegion = (data) => {
    let regionId = data || -1;
    const response = Gateway.authGateway(
        'GET',
        V1.region + `?site_region_id=${regionId}`
    );
    return response;
};

const siteIdentity = () => {
    const response = Gateway.authGateway('GET', V1.identity);
    return response;
};

const siteDatabase = () => {
    const response = Gateway.authGateway('GET', V1.site_db);
    return response;
};

const siteCosting = (data) => {
    const apiData = {
        product_ids: data.product_ids,
        cloud_provider_id: parseInt(data.cloud_provider_id),
    };
    const response = Gateway.authGateway(
        'POST',
        `${V1.site_operation.costing}`,
        JSON.stringify(apiData)
    );
    return response;
};

const siteAddon = () => {
    const response = Gateway.authGateway('GET', V1.products);
    return response;
};
const siteCloudProvider = () => {
    const response = Gateway.authGateway('GET', V1.cloud_provider);
    return response;
};

const upTimeReport = (identity) => {
    const response = Gateway.authGateway(
        'GET',
        `${V1.up_time_report}${identity}`
    );
    return response;
};

const SiteService = {
    siteGet,
    sitePost,
    siteDelete,
    siteDeleteCancel,
    siteRegion,
    siteIdentity,
    siteDatabase,
    siteCosting,
    siteAddon,
    siteCloudProvider,
    upTimeReport,
};
export default SiteService;
