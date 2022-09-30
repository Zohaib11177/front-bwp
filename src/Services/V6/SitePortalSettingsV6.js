import Gateway from 'Services/Gateway';
import V6 from 'Constants/V6ApiConstant';

const sitePSGet = () => {
    const response = Gateway.authGateway('GET', V6.portal_settings);
    return response;
};

const SitePSListV6 = {
    sitePSGet
};
export default SitePSListV6;
