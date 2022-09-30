import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PermissionBusiness from "Businesses/PermissionBusiness";
import AddCardModal from "Components/Billings/AddCardModal";
class PermissionDeniedComponent extends Component {
    state = {
        card_modal: false,
    };
    cardToggleModal = () => {
        const { card_modal } = this.state;
        this.setState({
            card_modal: !card_modal,
        });
    };
    render() {
        const { permissions, permissionNumber, text } = this.props;
        let permissionsCheck = PermissionBusiness.operationPermission(
            permissions,
            permissionNumber
        );
        if (permissions)
            if (!permissionsCheck)
                return (
                    <section
                        id="permission-denied-component"
                        className="box-shadow mb-1"
                    >
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div id="permission-box">
                                        <p className="mb-0  mr-4">
                                            {`${text}.`}
                                        </p>
                                        <Button
                                            type="sumbit"
                                            className="bionic-btn bionic-btn-sm box-shadow"
                                            onClick={this.cardToggleModal}
                                        >
                                            Add Billing Information
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        <AddCardModal
                            show={this.state.card_modal}
                            onHide={this.cardToggleModal}
                        />
                    </section>
                );
            else {
                return "";
            }
        else {
            return "";
        }
    }
}

export default PermissionDeniedComponent;
