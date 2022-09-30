import DOMAIN from 'Redux/V1/Domain/ActionType';
import DETAIL from 'Redux/V3/Sites/SiteDetail/SiteDetailActionType';

const initialState = {
    loading: false,
    err_msg: '',
    backup_details: {},
    database: {},
    container: {},
    domain_info: {
        domains: [],
    },
    page_speed: {
        desktop: {},
        mobile: {},
    },
    sftp: {},
    site_detail: {
        ip_address: '',
    },
    site_info: {
        data_center: {
            cloud_provider: {},
        },
    },
    access_sharing: {},
    postmark: {},
    staging: {},
    parent: {},
    wp_core: {},
    wp_plugin: [],
    wp_themes: [],
    tags: [],
    site_addons: [],
    resources: {
        bandwidth: {},
        disk: {},
        visitor: {},
    },
};

const SiteDetailReducerV3 = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL.SITE_DETAIL:
            return {
                ...state,
                loading: true,
            };
        case DETAIL.SITE_DETAIL_SUCCESS:
            const siteAddons = [];
            action.payload.site_addons.forEach((e, i) => {
                siteAddons[e.name] = { ...e };
            });
            return {
                ...state,
                loading: false,
                backup_details: action.payload.backup_details,
                database: action.payload.database,
                domain_info: action.payload.domain_info,
                page_speed: action.payload.page_speed,
                sftp: action.payload.sftp,
                container: action.payload.container,
                site_detail: action.payload.site_detail,
                site_info: action.payload.site_info,
                wp_core: action.payload.wp_core,
                wp_plugin: action.payload.wp_plugin,
                wp_themes: action.payload.wp_themes,
                tags: action.payload.tags,
                staging: action.payload.staging,
                parent: action.payload.parent,
                access_sharing:
                    action.payload.access_sharing.length > 0
                        ? action.payload.access_sharing[0]
                        : action.payload.access_sharing,
                postmark: action.payload.postmark,
                site_addons: siteAddons,
                resources: action.payload.resources,
            };
        case DETAIL.SITE_DETAIL_FAILED:
            return {
                ...state,
                loading: false,
                err_msg: action.response,
            };
        case DOMAIN.DOMAIN_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                domain_info: {
                    ...state.domain_info,
                    domains: action.response.domains,
                },
            };
        default:
            return state;
    }
};

export default SiteDetailReducerV3;
