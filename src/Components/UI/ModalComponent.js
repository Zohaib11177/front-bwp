import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ModalComponent extends Component {
    render() {
        return (
            <Modal
                className="cardmodel topup-modal-main"
                show={this.props.show}
                onHide={this.toggle}
            >
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.component}</Modal.Body>
            </Modal>
        );
    }
}

export default ModalComponent;
