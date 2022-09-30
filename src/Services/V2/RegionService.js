import Gateway from "Services/Gateway";
import V2 from "Constants/V2ApiConstant";


const getRegions = (identity) => {
    const response = Gateway.authGateway(
        "GET",
        `${V2.regions}`
    );
    return response;
};

const RegionService = {
    getRegions,
};
export default RegionService;
