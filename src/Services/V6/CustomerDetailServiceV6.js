import Gateway from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";



const getCustomerDetail = (data) => {
    const response = Gateway.gatewaySiteService("GET", V6.customer_detail + data);
    return response;
};



// const siteDomain = (data) => {
//     const _data = siteDomainBody(data);
//     const response = Gateway.gatewaySiteService("POST", V6.domain, _data);
//     return response;
// };

// const siteDomainBody = (data) => {
//     let _data = {};
//     _data.domain = data;

//     return JSON.stringify(_data);
// };

const CustomerDetailServiceV6 = {
   
    getCustomerDetail,
    
};
export default CustomerDetailServiceV6;
