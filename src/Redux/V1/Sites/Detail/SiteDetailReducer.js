import SITE_ACTION_TYPE from 'Redux/V1/Sites/SiteActionType';

export default (
    state = {
        site_detail: {
            quick_login: {
                url: 'asdsa',
            },
            basic_details: {
                host: '',
                ip_address: '',
            },
            container: {
                identity: '',
            },
            wordpress: {
                username: '',
                password: '',
            },
            sftps: [
                {
                    username: '',
                    password: '',
                    host: '',
                },
            ],
            access_sharing: [],
            database: {
                username: '',
                password: '',
                host: '',
            },
            database_detail: {
                name: null,
            },
            backup_details: { total_backups: 0, last_backup_date: null },
            security: {
                files_scanned: 0,
                thread_blocked: 0,
                total_backups: 0,
            },
            avg_insight: {
                fully_loaded_time: {
                    color: '',
                    value: 0,
                },
                loaded_time_prediction: {
                    color: '',
                    value: 0,
                },
                page_speed_score: {
                    color: '',
                    value: 0,
                },
                speed_score_prediction: {
                    color: '',
                    value: 0,
                },
            },
            google_page_speed: {
                desktop: {},
                mobile: {},
            },
            plugin_key: null,
            primary_domain: null,
            update: {
                plugins: null,
                themes: null,
                wp_version: null,
            },
            tags: [],
        },
        visitor: [],
        bandwidth: [],
        disk: [],
        loading: false,
        quick_login_loading: false,
        sftps: false,
        all_details: false,
        mobile_speed: '',
        desktop_speed: '',
        sftps_loading: false,
        success: false,
    },
    action
) => {
    switch (action.type) {
        case SITE_ACTION_TYPE.GET_SITE_DETAIL:
            return Object.assign(
                {},
                state,
                { loading: true },
                { host: action.data }
            );
        case SITE_ACTION_TYPE.GET_SITE_DETAIL_SUCCESS:
            return Object.assign(
                {},
                state,
                { loading: false },
                {
                    site_detail: action.data,
                    // visitor: action.data.resources.visitor,
                    // bandwidth: action.data.resources.bandwith,
                    // disk: action.data.resources.disk,
                    database_detail: action.data.database_detail,
                    all_details: true,
                    mobile_speed: action.data.google_page_speed.mobile,
                    desktop_speed: action.data.google_page_speed.desktop,
                },
                { success: true }
            );
        default:
            return state;
    }
};
