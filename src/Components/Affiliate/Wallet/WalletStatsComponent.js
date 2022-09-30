import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import DashboardTotalComponent from "Components/Dashboards/Ui/TotalComponent";
import "Assets/css/Responsive/affiliate.css";

class WalletStats extends Component {
    render() {
        return (
            <Row className="affiliate-wallet-main">
                <Col lg={4} md={6}>
                    <DashboardTotalComponent
                        title="Affiliate Wallet"
                        number={this.props.wallet}
                    />
                </Col>
                <Col lg={4} md={6}>
                    {" "}
                    <DashboardTotalComponent
                        title="Pending Balance"
                        number={this.props.pending}
                    />
                </Col>
                <Col lg={4}></Col>
            </Row>
        );
    }
}

export default WalletStats;
