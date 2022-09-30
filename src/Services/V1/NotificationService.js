import Gateway from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";
import QueryParams from "Helpers/QueryParamsHelper";

const notificationGet = (data) => {
    const query = QueryParams.queryGet(window.location.search);
    console.log(query);
    const response = Gateway.gatewayLogify(
        "GET",
        V1.notification + data.id + `?page=${data.page}&limit=`
    );
    return response;
};

const notificationRead = (data) => {
    const response = Gateway.gatewayLogify("PUT", V1.notification + data);
    return response;
};
const notificationList = (data) => {
    const query = QueryParams.queryGet(window.location.search) || {};
    const response = Gateway.gatewayLogify(
        "GET",
        V1.notification +
            data.id +
            `?page=${query.page}&limit=${query.page_limit}`
    );
    return response;
};

const NotificationService = {
    notificationGet,
    notificationRead,
    notificationList,
};
export default NotificationService;
