import V3 from "Constants/V3ApiConstant";
import Gateway from "Services/Gateway";

const alertGet = async (data) => {
  const response = await Gateway.authGateway(
    "GET",
    V3.alerts
  );
  return response;
};



const SystemAlertServiceV3 = {
  alertGet,

};

export default SystemAlertServiceV3;
