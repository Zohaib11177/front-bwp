import Gateway from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const sitedbGet = () => {
	const response = Gateway.authGateway("GET", V1.site_db);
	return response;
};

const SitedbService = {
	sitedbGet,
};
export default SitedbService;
