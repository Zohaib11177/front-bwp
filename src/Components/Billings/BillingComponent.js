import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import TemplateFull from "Templates/TemplateFull";
import ProfileSubMenuComponent from "Components/UI/ProfileSubMenuComponent";
import InvoiceListComponent from "Components/Billings/InvoiceListComponent";
import PaymentMethodComponent from "Components/Billings/PaymentMethodComponent";
import "Assets/css/sitedetail.css";
import "Assets/css/billing.css";
import "Assets/css/form.css";
import "Assets/css/pagination.css";
import "Assets/css/Responsive/Billing.css";

class BillingComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <ProfileSubMenuComponent active="billing" />
                    <div className="site-billing-page">
                        <TemplateFull>
                            <div>
                                <PaymentMethodComponent />
                                <InvoiceListComponent />
                                <div className="page-header d-none">
                                    Cancel Account
                                </div>
                                <div className="box cancel-box d-none">
                                    <Row>
                                        <Col sm="9">
                                            If you would like to cancel your
                                            account, proceed here
                                        </Col>
                                        <Col sm="3" className="text-right">
                                            <button className="btn cancelbtn btn-primary">
                                                Cancel Account
                                            </button>
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
export default BillingComponent;
