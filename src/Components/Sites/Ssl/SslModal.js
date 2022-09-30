import React, { Component } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import SslEnableAction from "Redux/V1/Ssl/Put/SslPutAction";
import Confirm from "Helpers/ConfirmationHelper";
import SslRevokeAction from "Redux/V1/Ssl/Delete/SslDeleteAction";
import SslRenewAction from "Redux/V1/Ssl/SslRenew/SslRenewAction";
import SslBusiness from "Businesses/SslBusiness";
class SslModal extends Component {
    state = {
        form: {
            email: null,
        },
        domains: [],
        revoke_domains: [],
        error: "",
    };
    // componentDidMount() {
    //     this.props.dis(DomainListAction.domainGet(this.props.identity));
    // }

    sslEnable = (domain) => {
        setTimeout(() => {
            this.setState({
                domains: [],
            });
            var domainToggle = document.getElementsByTagName("INPUT");
            for (var i = 0; i < domainToggle.length; i++) {
                if (domainToggle[i].checked) {
                    this.state.domains.push(domainToggle[i].value);
                }
            }
        }, 500);
    };
    sslAdd = () => {
        let data = {
            domains: [...new Set(this.state.domains)],
            identity: this.props.identity,
        };

        this.setState({ error: "" });
        if (data.domains.length > 0) {
            Confirm(
                this.props.dis,
                SslEnableAction.sslPut(data),
                "Maybe operations will be restricted after this"
            );
        } else {
            this.setState({ error: "Please select domain before adding SSL" });
        }
    };
    sslRevoke = () => {
        this.setState({
            revoke_domains: SslBusiness.domainsRevoke(this.props.domainList),
        });
        setTimeout(() => {
            let data = {
                revoke_domains: this.state.revoke_domains,
                identity: this.props.identity,
            };
            Confirm(
                this.props.dis,
                SslRevokeAction.sslDelete(data),
                "SSL from all domains will get removed "
            );
        }, 1000);
    };
    sslRenew = () => {
        setTimeout(() => {
            let data = {
                id: SslBusiness.sslRenew(this.props.domainList),
                identity: this.props.identity,
            };
            Confirm(
                this.props.dis,
                SslRenewAction.sslRenew(data),
                "SSL from all domains will get renew "
            );
        }, 1000);
    };
    render() {
        return (
            <Modal
                className="cardmodel ssl-modal"
                show={this.props.show}
                onHide={this.onHide}
                id="ssl-modal-main"
            >
                <Modal.Header>
                    <Modal.Title>SSL Management</Modal.Title>
                    {SslBusiness.validateStatus(this.props.domainList) ===
                    "event-none" ? (
                        <p className="text-danger">
                            Your request is in process, operations are
                            restricted for a short time until your process is
                            complete
                        </p>
                    ) : (
                        ""
                    )}
                </Modal.Header>
                <div className="ssl-modal-scrollable">
                    <Modal.Body
                        className={SslBusiness.validateStatus(
                            this.props.domainList
                        )}
                    >
                        <Row>
                            <Col lg="7" xs="6">
                                <Modal.Title className="mb-1 ">
                                    Domain List:
                                </Modal.Title>
                            </Col>
                            <Col lg="3" xs="3" className="p-0">
                                <Modal.Title className="mb-1 ">
                                    Status
                                </Modal.Title>
                            </Col>
                            <Col lg="2" xs="3">
                                <Modal.Title className="enable-ssl-title">
                                    Enable SSL
                                </Modal.Title>
                            </Col>
                        </Row>
                        {/* {this.domainList()} */}
                        {SslBusiness.domainList(
                            this.props.domainList,
                            this.sslEnable
                        )}
                        {SslBusiness.domainStaging(this.props.domainList)}
                    </Modal.Body>
                </div>
                <Modal.Footer>
                    <Button
                        className="close-btn ssl-modal-close-button"
                        onClick={this.props.onHide}
                    >
                        Close
                    </Button>
                    <div>
                        {" "}
                        {SslBusiness.sslRenewButton(this.props.domainList) ? (
                            <Button
                                className={`btn bionic-btn mr-2  ${SslBusiness.validateStatus(
                                    this.props.domainList
                                )}  ${
                                    this.props.sslRenew.loading ? "loading" : ""
                                }`}
                                onClick={this.sslRenew}
                            >
                                Renew
                            </Button>
                        ) : (
                            ""
                        )}
                        {SslBusiness.revokeStatus(this.props.domainList) ? (
                            <Button
                                className={`btn bionic-btn  revoke-btn  ${
                                    this.props.sectionDisable
                                }  ${
                                    this.props.sslRevokeResponse.loading
                                        ? "loading"
                                        : ""
                                }`}
                                onClick={this.sslRevoke}
                            >
                                Revoke
                            </Button>
                        ) : (
                            <Button
                                className={`btn bionic-btn ${SslBusiness.validateStatus(
                                    this.props.domainList
                                )}  ${
                                    this.props.enableSslResponse.loading
                                        ? "loading"
                                        : ""
                                }`}
                                onClick={this.sslAdd}
                            >
                                Add SSL
                            </Button>
                        )}
                    </div>
                </Modal.Footer>
                <div className="d-block text-danger validation-message p-2 pr-4 text-right">
                    {this.state.error}
                </div>
            </Modal>
        );
    }
}

export default SslModal;
