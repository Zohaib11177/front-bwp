import React, { Component } from "react";
import { connect } from "react-redux";
import InvoiceListActionV6 from "Redux/V6/Billing/Invoice/Get/InvoiceGetActionV6";
import NoDataHelper from "Helpers/NoDataHelper";
import Pagination from "Components/Pagination/PaginationComponent";
import TableComponent from "Components/UI/TableComponent";
import BillingBusiness from "Businesses/BillingBusiness";
import Configs from "Configs";
import { ReactSVG } from "react-svg";
class InvoiceListComponent extends Component {
    componentDidMount = () => {
        this.props.dispatch(InvoiceListActionV6.invoiceGet());
    };

    render() {
        const { invoices, loading, pagination } = this.props.invoice;
        const tableHeadings = [
            "INVOICE NUMBER",
            "INVOICE MONTH",
            "AMOUNT",
            "STATUS",
            "ACTIONS",
        ];
        return (
            <React.Fragment>
                <div className="page-header">
                    Invoices
                    {loading ? (
                        <span
                            className="spinner-grow spinner-grow-sm text-secondary "
                            role="status"
                        ></span>
                    ) : null}
                    <div className="heading-icon">
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/SubMenu/ProfileSubMenu/profile-submenu-bill.svg`}
                            alt="gauge"
                            className="billing-invoice-icon"
                        />
                    </div>
                </div>

                <TableComponent
                    classNameTable="invoice"
                    thead={tableHeadings}
                    noData={NoDataHelper.available(invoices, loading)}
                    tbody={BillingBusiness.InvoiceGenerate(invoices)}
                />

                {NoDataHelper.available(invoices) ? (
                    ""
                ) : (
                    <Pagination
                        title={"Invoices"}
                        perPage={pagination.per_page}
                        totalPages={pagination.total_pages}
                        currentPage={pagination.current_page}
                    />
                )}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        invoice: state.billingV6.invoiceV6.invoiceList,
    };
}
export default connect(mapStateToProps)(InvoiceListComponent);
