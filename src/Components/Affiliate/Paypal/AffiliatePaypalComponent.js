import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import AffiliatePaypalForm from "Components/Forms/AffiliatePaypalForm";
import "Assets/css/Responsive/affiliate.css";
class AffiliatePaypalComponent extends Component {
    render() {
        const { dis, profileUpdate, account } = this.props;
        return (
            <Row className="mt-5 paypal-form-main">
                <Col lg={8} md={12}>
                    <AffiliatePaypalForm
                        dis={dis}
                        profileUpdate={profileUpdate}
                        account={account}
                    />
                </Col>
            </Row>
        );
    }
}

export default AffiliatePaypalComponent;
