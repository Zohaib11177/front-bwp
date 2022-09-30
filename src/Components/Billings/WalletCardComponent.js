import React, { Component } from "react";
import RoundUpHelper from "Helpers/RoundUpHelper";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class WalletCardComponent extends Component {
    render() {
        const { wallet, topUp, topUpFunction } = this.props;
        return (
            <Col lg="4">
                <div className="card-payment topup-card">
                    <div className="card-body">
                        <Row>
                            <Col lg="8 col-8">
                                <div className="card-title">Wallet</div>
                            </Col>
                            <Col
                                lg="4"
                                className="text-right col-4 topup-card-link"
                            >
                                <Link
                                    onClick={topUpFunction}
                                    className="card-link"
                                >
                                    Top Up
                                </Link>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col lg="8 col-8">
                                <div className="card-number">
                                    {"$"}{" "}
                                    {topUp.top_up.current_balance
                                        ? RoundUpHelper.twodecimalplace(
                                              topUp.top_up.current_balance
                                          )
                                        : RoundUpHelper.twodecimalplace(
                                              wallet.current_balance
                                          )}
                                </div>
                                <a href="/" className="card-year">
                                    View Transactions
                                </a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        );
    }
}

export default WalletCardComponent;
