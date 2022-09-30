import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const invoiceGet = async () => {
    const queryParams = window.location.search;
    const response = await GATEWAY.authGateway(
        "GET",
        V1.billing.invoice + queryParams
    );
    return response;
};
const invoiceFirst = async (invoiceId) => {
    const response = await GATEWAY.authGateway(
        "GET",
        V1.billing.invoice + "/" + invoiceId
    );
    return response;
};
const invoicePut = async (data) => {
    const _data = invoicePutBody(data);
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.billing.invoice + "/charge/" + data.invoiceId,
        _data
    );
    return response;
};
const invoicePutBody = (data) => {
    let _data = {};
    _data.card_id = parseInt(data.cardId);

    return JSON.stringify(_data);
};
const InvoiceService = {
    invoiceGet,
    invoiceFirst,
    invoicePut,
};
export default InvoiceService;
