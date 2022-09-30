import DASHBOARD_ACTION_TYPE from "Redux/V1/Dashboard/DashboardActionType";

function getDashboard() {
    return { type: DASHBOARD_ACTION_TYPE.GET_DASHBOARD };
}

function getDashboardSuccess(response) {
    return { type: DASHBOARD_ACTION_TYPE.GET_DASHBOARD_SCCUESS, response };
}
function getDashboardFailed(response) {
    return { type: DASHBOARD_ACTION_TYPE.GET_DASHBOARD_FAIL, response };
}

const DashboardAction = {
    getDashboard,
    getDashboardSuccess,
    getDashboardFailed,
};

export default DashboardAction;
