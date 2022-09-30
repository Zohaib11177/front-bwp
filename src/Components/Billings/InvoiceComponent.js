import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TemplateMain from 'Templates/TemplateMain';
import 'Assets/css/sitedetail.css';
import 'Assets/css/siteinvoice.css';
import TemplateFull from 'Templates/TemplateFull';
import InvoicePaymentAction from 'Redux/V1/Billing/Invoice/Put/InvoicePutAction';
import invoiceDetailAction from 'Redux/V1/Billing/Invoice/First/InvoiceFirstAction';
import { connect } from 'react-redux';
import TimeStampHelper from 'Helpers/TimeStampHelper';
import RoundUpHelper from 'Helpers/RoundUpHelper';
import PaymentComponent from 'Components/Billings/PaymentComponent';
import InvoiceBusiness from 'Businesses/InvoiceBusiness';
import 'Assets/css/Responsive/InvoiceDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/fontawesome-free-solid';
import html2pdf from 'html2pdf.js';

class InvoiceComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    state = {
        card_id: null,
        loading: false,
    };
    componentDidMount() {
        this.props.dis(invoiceDetailAction.invoiceFirst(this.props.invoiceId));
    }

    convertToBase64 = (image) => {};

    payInvoiceFunction = (invoiceId) => {
        const data = {
            invoiceId: invoiceId,
            cardId: this.state.card_id,
        };
        this.props.dis(InvoicePaymentAction.invoicePut(data));
    };
    cardIdFunction = (id) => {
        this.setState({
            card_id: id,
        });
    };

    generatePDF = async (invoice) => {
        this.setState({ loading: true });

        const element = this.myRef.current;
        const opt = {
            margin: 1,
            filename: `Invoice ${invoice.reference}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2.5 },
            jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' },
        };

        await html2pdf().set(opt).from(element).save();

        this.setState({ loading: false });
    };
    render() {
        // const obj = {}
        const portal_settings = JSON.parse(
            localStorage.getItem('portal_settings')
        );
        const { invoice } = this.props.invoiceDetail;

        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="site-invoice-page">
                        <div className="text-right">
                            <button
                                onClick={() => this.generatePDF(invoice)}
                                disabled={this.state.loading}
                                className="mx-3 mt-1 btn text-black-50"
                                type="button">
                                {this.state.loading
                                    ? 'Exporting...'
                                    : 'Export PDF'}{' '}
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                        </div>
                        <TemplateFull>
                            <div className="box">
                                <div ref={this.myRef}>
                                    <Row>
                                        <Col
                                            sm="6"
                                            className="billing-invoice-logo">
                                            <div>
                                                <img
                                                    src={
                                                        !portal_settings?.name
                                                            ? '/assets/img/Brands/bionic-logo-static.png'
                                                            : portal_settings?.logo
                                                            ? portal_settings?.logo
                                                            : null
                                                    }
                                                    height="50"
                                                    alt="bionic brand"
                                                />
                                            </div>
                                        </Col>

                                        <Col sm="6" className="text-right">
                                            <div className="invoice-number">
                                                <label className="">
                                                    Invoice Number
                                                </label>
                                                <h1 className="">
                                                    {invoice.reference}
                                                </h1>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="8"></Col>
                                        <Col lg="4" className="">
                                            <div className="invoice-information">
                                                <label>
                                                    Invoice Information
                                                </label>
                                                <ul className="list-unstyled">
                                                    <li className="d-flex justify-content-between">
                                                        <span>
                                                            Invoice Number
                                                        </span>
                                                        <span>
                                                            {invoice.reference}
                                                        </span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span>Issue Date</span>
                                                        <span>
                                                            {TimeStampHelper.standardDateFormat(
                                                                invoice.created_date
                                                            )}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg="12">
                                            <table class="table table-invoice">
                                                {
                                                    InvoiceBusiness.generate(
                                                        invoice
                                                    ).invoiceData
                                                }
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="wd-20p"
                                                            colspan="6">
                                                            Service
                                                        </th>
                                                        <th className="wd-20p d-none d-sm-table-cell"></th>
                                                        <th
                                                            className="tx-center responsive-d-none"
                                                            colspan="3"></th>
                                                        <th
                                                            className="tx-right  responsive-d-none"
                                                            colspan="1"></th>
                                                        <th className="text-right responsive-text-right">
                                                            Amount
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        InvoiceBusiness.generate(
                                                            invoice
                                                        ).invoiceServiceData
                                                    }
                                                </tbody>

                                                <tbody>
                                                    <tr>
                                                        <td
                                                            className="tx-nowrap"
                                                            colspan="6">
                                                            Disk Overage
                                                        </td>
                                                        <td className="d-none d-sm-table-cell"></td>
                                                        <td
                                                            className="tx-center responsive-d-none"
                                                            colspan="3"></td>
                                                        <td
                                                            class="tx-right responsive-d-none "
                                                            colspan="1"></td>
                                                        <td className="tx-right responsive-text-right">
                                                            <div className="auto-width">
                                                                {' '}
                                                                $ 0.00
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            className="tx-nowrap"
                                                            colspan="6">
                                                            Resource Overage
                                                        </td>
                                                        <td className="d-none d-sm-table-cell "></td>
                                                        <td
                                                            className="tx-center responsive-d-none"
                                                            colspan="3"></td>
                                                        <td
                                                            className="tx-right responsive-d-none "
                                                            colspan="1"></td>
                                                        <td className="tx-right responsive-text-right">
                                                            <div className="auto-width">
                                                                {' '}
                                                                $ 0.00{' '}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col
                                            lg="4"
                                            className="invoice-payment d-grid mt-4">
                                            {!this.state.loading ? (
                                                <PaymentComponent
                                                    getCard={
                                                        this.cardIdFunction
                                                    }
                                                />
                                            ) : null}
                                        </Col>
                                        <Col
                                            lg="4"
                                            className="invoice-information"></Col>
                                        <Col
                                            lg="4"
                                            className="invoice-information">
                                            <ul className="list-unstyled">
                                                <li className="d-flex justify-content-between">
                                                    <span>Sub-Total</span>
                                                    <span>
                                                        <span className="invoice-dollar-sub-total">
                                                            $
                                                        </span>
                                                        {invoice.amount_gross
                                                            ? RoundUpHelper.twodecimalplace(
                                                                  invoice.amount_gross
                                                              )
                                                            : RoundUpHelper.twodecimalplace(
                                                                  0.0
                                                              )}
                                                    </span>
                                                </li>

                                                <li className="d-flex justify-content-between">
                                                    <span>Discount</span>
                                                    <span>
                                                        <span className="invoice-dollar">
                                                            $
                                                        </span>
                                                        {invoice.amount_discount
                                                            ? RoundUpHelper.twodecimalplace(
                                                                  invoice.amount_discount
                                                              )
                                                            : RoundUpHelper.twodecimalplace(
                                                                  0.0
                                                              )}{' '}
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Total </strong>
                                                    <strong>
                                                        <span className="invoice-dollar">
                                                            $
                                                        </span>
                                                        {invoice.amount_net
                                                            ? RoundUpHelper.twodecimalplace(
                                                                  invoice.amount_net
                                                              )
                                                            : RoundUpHelper.twodecimalplace(
                                                                  0.0
                                                              )}{' '}
                                                    </strong>
                                                </li>
                                            </ul>
                                            {invoice.status === 'paid' ? (
                                                <Button
                                                    className={
                                                        'btn-block btn-success'
                                                    }
                                                    disabled>
                                                    Paid
                                                </Button>
                                            ) : (
                                                <Button
                                                    className={`btn-block bionic-btn ${
                                                        this.props
                                                            .invoicePayment
                                                            .loading
                                                            ? 'loading'
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        this.payInvoiceFunction(
                                                            invoice.id
                                                        )
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            'rgb(22, 101, 216)',
                                                    }}>
                                                    Pay Now{' '}
                                                </Button>
                                            )}
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </TemplateFull>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        invoiceDetail: state.invoiceDetail,
    };
}

export default connect(mapStateToProps)(InvoiceComponent);
