import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ExternalLinkComponent from "Components/UI/ExternalLinkComponent";

class AffiliateLink extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <div className="page-header affi-code">
                        Affiliate Link:{" "}
                        <ExternalLinkComponent
                            link
                            linkText={this.props.affUrl}
                        />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default AffiliateLink;
