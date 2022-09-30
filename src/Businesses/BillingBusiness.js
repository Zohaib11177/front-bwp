import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import SwitchComponent from 'Components/Sites/Domain/SwitchComponent';
import TimeStampHelper from 'Helpers/TimeStampHelper';
import RoundUpHelper from 'Helpers/RoundUpHelper';
import Configs from 'Configs';

const InvoiceGenerate = (data) => {
    let classResponse;
    let allInvoices = data.map((invoice) => {
        if (invoice.status === 'paid') {
            classResponse = 'green';
        } else if (invoice.status === 'pending') {
            classResponse = 'gray';
        } else {
            classResponse = 'red';
        }
        return (
            <React.Fragment>
                <tr className="invoice-list">
                    <td data-label="INVOICE NUMBER" className="invoice-number">
                        <Link
                            title="View Invoice"
                            className="btn-link decoration-none"
                            to={'invoice/' + invoice.id}>
                            Invoice {invoice.reference}
                        </Link>
                    </td>
                    <td data-label="INVOICE MONTH" className="invoice-date">
                        {' '}
                        {TimeStampHelper.standardDateFormat(invoice.date)}
                    </td>
                    <td data-label="AMOUNT" className="invoice-amount">
                        {' '}
                        ${' '}
                        {invoice.amount_net
                            ? RoundUpHelper.twodecimalplace(invoice.amount_net)
                            : RoundUpHelper.twodecimalplace(invoice.amount_net)}
                    </td>
                    <td data-label="STATUS 	">
                        <div className={'invoice-status ' + classResponse}>
                            {invoice.status}
                        </div>
                    </td>
                    <td data-label="ACTIONS	">
                        <Link
                            title="View Invoice"
                            className="btn-link"
                            to={'invoice/' + invoice.id}>
                            <ReactSVG
                                src={`${Configs.public_url}/assets/img/General/eye-not.svg`}
                                alt="gauge"
                                className="invoice-view"
                            />
                        </Link>
                    </td>
                </tr>
            </React.Fragment>
        );
    });
    return allInvoices;
};
const cardGenerate = (
    data,
    cardPrimaryFunction,
    cardDeleteFunction,
    cardToggleUpdateModal,
    cardDelete
) => {
    const allCards = data.map((card) => {
        return (
            <Col lg="4">
                <div className="card-payment">
                    <div className="card-body">
                        <Row>
                            <Col lg="6 col-8">
                                <div className="card-title">{card.brand}</div>
                            </Col>

                            <Col
                                lg="6"
                                className={`text-right toggle-make-primary col-4 `}>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <span onClick={()=>cardToggleUpdateModal(card.id)} role="button" className="card-link card-primary-tag">
                                            Update
                                        </span>
                                    </div>
                                    <div>
                                        {card.is_primary ? (
                                            <span className={`card-link card-primary-tag ${card.is_primary ? 'event-none' : ''
                                        }`}>
                                                Primary{' '}
                                            </span>
                                        ) : (
                                            <SwitchComponent
                                                id={`react-switch-${card.id}`}
                                                change={() =>
                                                    cardPrimaryFunction(card.id)
                                                }
                                                check={card.is_primary}
                                                tooltip={'Make this card primary'}
                                            />
                                        )}
                                    </div>

                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col lg="8 col-8">
                                <div className="card-number">{card.number}</div>
                                <div className="card-year">
                                    {`${card.exp_month} / ${card.exp_year}`}
                                </div>
                            </Col>
                            {!card.is_primary ? (
                                <Col lg="4" className="text-right pr-0">
                                    <p
                                        className={`btn card-link mb-0 text-danger no-outline hover card-delete-button  ${cardDelete.loading ? 'loading' : ''
                                            }`}
                                        onClick={() =>
                                            cardDeleteFunction(card.id)
                                        }>
                                        Delete
                                    </p>
                                </Col>
                            ) : null}
                        </Row>
                    </div>
                </div>
            </Col>
        );
    });
    return allCards;
};
const BillingBusiness = {
    InvoiceGenerate,
    cardGenerate,
};

export default BillingBusiness;
