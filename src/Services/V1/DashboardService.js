import Gateway from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";

function get() {
    const response = Gateway.authGateway("GET", V2.dashboard);
    return response;
}

const DashboardService = {
    get,
};
export default DashboardService;
