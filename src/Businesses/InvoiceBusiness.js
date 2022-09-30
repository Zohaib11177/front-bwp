import React from "react";
import RoundUpHelper from "Helpers/RoundUpHelper";
import "Assets/css/Responsive/InvoiceDetail.css";
const generate = (data) => {
    const invoice = data;
    const invoiceProducts = invoice.products;
    let invoiceData,
        allAddons,
        addonPrice,
        invoiceServiceData,
        sumaddon,
        sumservice = 0;

    if (invoiceProducts) {
        invoiceData = invoiceProducts.map((product) => {
            let addons = product.addons;
            if (addons) {
                allAddons = addons.map((addo) => {
                    return <li>{addo.name}</li>;
                });
                addonPrice = addons.map((addo) => {
                    return (
                        <li>
                            ${" "}
                            {addo.amount_net
                                ? RoundUpHelper.twodecimalplace(addo.amount_net)
                                : RoundUpHelper.twodecimalplace(0.0)}
                        </li>
                    );
                });
                sumaddon = addons
                    .map((item) => parseFloat(item.amount_net))
                    .reduce((prev, curr) => prev + curr, 0);
            }

            return (
                <React.Fragment>
                    <thead>
                        <tr>
                            <th className="wd-20p" colspan="5">
                                {product.name}
                            </th>
                            <th className="wd-20p d-sm-table-cell responsive-d-none "></th>
                            <th className="tx-center " colspan="1"></th>
                            <th
                                className="tx-right responsive-d-none"
                                colspan="4"
                            ></th>
                            <th className="text-right responsive-text-right">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tx-nowrap  responsive-d-none">
                                Domain
                            </td>
                            <td
                                className=" d-sm-table-cell responsive-d-show"
                                colspan="6"
                            >
                                {" "}
                                {product.domain}
                            </td>

                            <td
                                className="tx-center  responsive-d-none "
                                colspan="3"
                            >
                                {" "}
                                {product?.site_plan}
                            </td>
                            <td className="tx-right responsive-d-none "></td>
                            <td className="tx-right responsive-text-right">
                                <div className="auto-width">
                                    ${" "}
                                    {product.amount_net
                                        ? RoundUpHelper.twodecimalplace(
                                              product.amount_net
                                          )
                                        : RoundUpHelper.twodecimalplace(
                                              0.0
                                          )}{" "}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="tx-nowrap responsive-d-none">
                                Addons
                            </td>
                            <td className=" responsive-d-show" colspan="6">
                                <ul class="list-unstyled">{allAddons}</ul>
                            </td>
                            <td
                                className="tx-center responsive-d-none  "
                                colspan="3"
                            ></td>
                            <td className="tx-right responsive-d-none  "></td>
                            <td className="tx-right responsive-text-right">
                                {" "}
                                <div className="auto-width">
                                    <ul class="list-unstyled">{addonPrice}</ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="tx-nowrap responsive-d-none"></td>
                            <td
                                className=" d-sm-table-cell responsive-d-show"
                                colspan="6"
                            >
                                {" "}
                            </td>

                            <td
                                className="tx-center  responsive-d-none "
                                colspan="4"
                            >
                                {" "}
                                Sub-Total
                            </td>
                            <td className="tx-right responsive-text-right">
                                <div className="auto-width">
                                    ${" "}
                                    {product.amount_net
                                        ? RoundUpHelper.twodecimalplace(
                                              parseFloat(product.amount_net) +
                                                  sumaddon +
                                                  sumservice
                                          )
                                        : RoundUpHelper.twodecimalplace(
                                              0.0
                                          )}{" "}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </React.Fragment>
            );
        });
    }

    if (invoice.services) {
        sumservice = invoice.services
            .map((item) => parseFloat(item.amount_net))
            .reduce((prev, curr) => prev + curr, 0);
        invoiceServiceData = invoice.services.map((service) => {
            return (
                <React.Fragment>
                    <tr>
                        <td className="tx-nowrap" colspan="6">
                            {service.name}
                        </td>
                        <td className="d-none d-sm-table-cell"></td>
                        <td
                            className="tx-center responsive-d-none"
                            colspan="3"
                        ></td>
                        <td
                            className="tx-right responsive-d-none"
                            colspan="1"
                        ></td>
                        <td className="tx-right service-amount">
                            <div class="auto-width">
                                ${" "}
                                {service.amount_net
                                    ? RoundUpHelper.twodecimalplace(
                                          service.amount_net
                                      )
                                    : RoundUpHelper.twodecimalplace(0.0)}
                            </div>
                        </td>
                    </tr>
                </React.Fragment>
            );
        });
    }
    return {
        invoiceData,
        invoiceServiceData,
    };
};
const InvoiceBusiness = {
    generate,
};

export default InvoiceBusiness;
