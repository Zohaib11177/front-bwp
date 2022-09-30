import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Header from "Components/Header";
import Footer from "Components/Footer";
import PermissionDeniedComponent from "Components/UI/PermissionDeniedComponent";
import WarningMessageComponent from "Components/Message/WarningMessageComponent";
/*
This template is in full width
using 12 col of bootstrap
*/

class TemplateMain extends Component {
    render() {
        const {
            classNameSection,
            permissions,
            permissionNumber,
            text,
            warningMessage,
            warningCondition,
            hide,
            bg,
        } = this.props;
        return (
            <section
                style={{ backgroundColor: bg }}
                id="template-main"
                className={`w-100 text-left ${classNameSection}`}
            >
                <PermissionDeniedComponent
                    permissions={permissions}
                    permissionNumber={permissionNumber}
                    text={text}
                />
                <WarningMessageComponent
                    text={warningMessage}
                    condition={warningCondition}
                />
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
                {hide ? null : <Footer />}
            </section>
        );
    }
}

export default TemplateMain;
