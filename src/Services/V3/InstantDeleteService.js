
import Gateway from "Services/Gateway";
import V3 from "Constants/V3ApiConstant";


const instantDeleteV3 = async (identity) => {
  const response = await Gateway.gatewaySiteService(
    "DELETE",
    V3.instant_delete + identity
  );
  return response;
};

const SiteInstantDeleteServiceV3 = {
    instantDeleteV3,
};
export default SiteInstantDeleteServiceV3;