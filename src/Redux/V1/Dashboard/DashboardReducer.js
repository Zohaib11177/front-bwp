import DASHBOARD_ACTION_TYPE from "Redux/V1/Dashboard/DashboardActionType";

export default (
    state = {
        loading: false,
        response: {
            site_summary: {
                total: 0,
                live: 0,
                staging: 0,
            },
            security: {
                files_scanned: 0,
                thread_blocked: 0,
                total_backups: 0,
            },
            avg_insight: {
                fully_loaded_time: {
                    color: 0,
                    value: 0,
                },
                loaded_time_prediction: {
                    color: 0,
                    value: 0,
                },
                page_speed_score: {
                    color: 0,
                    value: 0,
                },
                speed_score_prediction: {
                    color: 0,
                    value: 0,
                },
            },
            google_page_speed: {
                mobile: {
                    after_load_time: 0,
                    after_score: 0,
                    before_load_time: 0,
                    before_score: 0,
                },
                desktop: {
                    after_load_time: 0,
                    after_score: 0,
                    before_load_time: 0,
                    before_score: 0,
                },
            },
            resources: {
                bandwith: {
                    allocation: 0,
                    used: 0,
                },
                disk: {
                    allocation: 0,
                    used: 0,
                },
                visitor: {
                    allocation: 0,
                    used: 0,
                },
            },
            billing: {
                billing_last_date: null,
                billing_next_date: null,
                billing_start_date: null,
            },
            update: {
                plugin: 0,
                theme: 0,
                wp: 0,
            },
            update_monthly: {
                plugin: 0,
                theme: 0,
                wp: 0,
            },
        },
        succcess: false,
    },
    action
) => {
    switch (action.type) {
        case DASHBOARD_ACTION_TYPE.GET_DASHBOARD:
            return { ...state, loading: true };
        case DASHBOARD_ACTION_TYPE.GET_DASHBOARD_SCCUESS:
            return {
                ...state,
                loading: false,
                response: action.response.dashboard,
                success: true,
            };
        case DASHBOARD_ACTION_TYPE.GET_DASHBOARD_FAIL:
            return { ...state, loading: false, success: false };
        default:
            return state;
    }
};
