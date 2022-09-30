import SITE from "Redux/V6/Sites/Site/ActionTypeV6";

const initialState = {
    loading: false,
    err_msg: "",
    container: {},
    domain_info: {
        domains: [],
    },
    sftp: {},
    site_detail: {
        ip_address: "",
    },
    site_info: {
        plan_name: "",
        data_center: {
            cloud_provider: {},
        },
    },
    access_sharing: {},
    postmark: {},
    staging: {},
    parent: {},
    tags: [],
    site_addons: {},
};

const SiteDetailReducerV6 = (state = initialState, action) => {
    switch (action.type) {
        case SITE.SITE_DETAIL_V6:
            return {
                ...state,
                loading: true,
            };
        case SITE.SITE_DETAIL_V6_SUCCESS:
            return {
                ...state,
                loading: false,
                domain_info: action.response.domain_info,
                sftp: action.response.sftp,
                container: action.response.container,
                site_detail: action.response.site_detail,
                site_info: action.response.site_info,
                tags: action.response.tags,
                staging: action.response.staging,
                parent: action.response.parent,
                access_sharing:
                    action.response.access_sharing.length > 0
                        ? action.response.access_sharing[0]
                        : action.response.access_sharing,
                postmark: action.response.postmark,
                site_addons: action.response.site_addons,
            };
        case SITE.SITE_DETAIL_V6_FAILED:
            return {
                ...state,
                loading: false,
                err_msg: action.response,
            };
        default:
            return state;
    }
};

export default SiteDetailReducerV6;
