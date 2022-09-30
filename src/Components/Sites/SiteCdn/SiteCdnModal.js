import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import InputTextField from "Components/Forms/Fields/InputTextField";
import CdnUpdateActionV2 from "Redux/V2/Sites/Addons/Cdn/Put/CdnPutActionV2";
import CdnCacheAction from "Redux/V1/Sites/Addons/Cdn/CdnCache/CdnCacheAction";
import "Assets/css/form.css";
import "Assets/css/Responsive/SiteDetailAddons.css";
class CdnModal extends Component {
    state = {
        form: {
            include: this.props.cdnDetails.include,
            exclude: this.props.cdnDetails.exclude,
            disable_admin: this.props.cdnDetails.disable_admin,
        },
        identity: this.props.cdnDetails,
    };

    handleChange = (event) => {
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const updateDetails = {
            identity: this.props.identity,
            form: this.state.form,
        };
        this.props.dispatch(CdnUpdateActionV2.cdnPut(updateDetails));
    };

    cdnCache = () => {
        this.props.dispatch(CdnCacheAction.cdnCache(this.props.identity));
    };

    render() {
        return (
            <Modal
                className="cardmodel responsive-cdn-modal"
                show={this.props.show}
                onHide={this.cdnToggleModal}
            >
                <Modal.Header>
                    <Modal.Title>CDN DETAILS</Modal.Title>
                </Modal.Header>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <div
                            className="form-container cdn-modal-main"
                            id="registration-form"
                        >
                            <Row>
                                <Col lg="12">
                                    <InputTextField
                                        name="include"
                                        getChange={this.handleChange}
                                        value={this.state.form.include}
                                        label="Include"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12">
                                    <InputTextField
                                        name="exclude"
                                        getChange={this.handleChange}
                                        value={this.state.form.exclude}
                                        label="Exclude"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" className="mt-2">
                                    <Form.Group
                                        controlId="formBasicCheckbox"
                                        className="cdn-modal-form"
                                    >
                                        <Form.Check
                                            name="disable_admin"
                                            type="checkbox"
                                            className="p-0"
                                            checked={
                                                this.state.form.disable_admin
                                            }
                                            onChange={this.handleChange}
                                            value={
                                                this.state.form.disable_admin
                                            }
                                            label="Disable Admin"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Row className="w-100 no-gutters">
                            <Col md={4}>
                                <Button
                                    className="close-btn cdn-modal-close-btn"
                                    onClick={this.props.onHide}
                                >
                                    Close
                                </Button>
                            </Col>
                            <Col md={4} className="text-right">
                                <Button
                                    className={`payment-btn bionic-btn  ${
                                        this.props.cdnCache.loading
                                            ? "loading"
                                            : ""
                                    }`}
                                    onClick={this.cdnCache}
                                >
                                    Purge Cache
                                </Button>
                            </Col>
                            <Col
                                md={4}
                                className="text-right responsive-column"
                            >
                                <Button
                                    type="submit"
                                    className={`payment-btn 
                                 responsive-update-cdn-btn
                                    bionic-btn  ${
                                        this.props.cdnUpdate.loading
                                            ? "loading"
                                            : ""
                                    }`}
                                >
                                    {/* <Button
                                    type="submit"
                                    className={`payment-btn 
                                    responsive-update-cdn-btn
                                    bionic-btn  ${
                                        this.props.cdnUpdate.loading
                                            ? "loading"
                                            : ""
                                    }`}
                                > */}
                                    Update CDN
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cdnCache: state.site.addon.cdnCache,
    };
};

export default connect(mapStateToProps)(CdnModal);
