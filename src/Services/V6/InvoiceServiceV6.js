import GATEWAY from "Services/Gateway";
import V6 from "Constants/V6ApiConstant";

const invoiceGet = async () => {
    const queryParams = window.location.search;
    const response = await GATEWAY.authGateway(
        "GET",
        V6.billing.invoice + queryParams
    );
    return response;
};

const InvoiceServiceV6 = {
    invoiceGet,
};
export default InvoiceServiceV6;
