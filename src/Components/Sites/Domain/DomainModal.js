import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Modal,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import Comfirmation from 'Helpers/ConfirmationHelper';
import SwitchComponent from './SwitchComponent';
import ForceRedirectAction from 'Redux/V1/ForceRedirect/ForcePutActions';
import DomainValidation from 'Validations/DomainValidation';
import DeleteDomainAction from 'Redux/V1/Sites/Domain/Delete/Action';
import DomainPrimaryAction from 'Redux/V1/Domain/Put/DomainPutAction';
import 'Assets/css/domainmodal.css';
import 'Assets/css/Responsive/SiteDetailDomain.css';
import ErrorBusiness from 'Businesses/ErrorBusiness';

class DomainModal extends Component {
    state = {
        form: {
            new_domain: '',
            old_domain: null,
            force: this.props.container.isForced,
        },
    };
    // componentDidMount() {
    //     console.log('SHOW', this.props.container.identity)
    // }

    handleChange = (event) => {
        const errorUpdate = ErrorBusiness.errorRemove(
            this.state.error,
            event.target.name
        );
        this.setState({
            error: errorUpdate,
        });
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
    };
    toggleChange = (event) => {
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
        });
        this.props.dis(
            ForceRedirectAction.forcePut(this.props.container.identity)
        );
    };
    resetField = (close = null) => {
        this.setState({
            form: {
                new_domain: '',
            },
        });
        if (close === null) {
            this.props.onHide();
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { form } = this.state;
        form.old_domain = this.props.container.primary_domain_name;

        const data = {
            identity: this.props.container.identity,
            form,
        };
        DomainValidation.validate(this.state.form, { abortEarly: false })
            .then(() => {
                this.props.postDomain(data);
                setTimeout(() => {
                    this.resetField(false);
                }, 1000);
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };
    domainDelete = (domain) => {
        let data = {
            identity: this.props.container.identity,
            domain: domain,
        };
        Comfirmation(this.props.dis, DeleteDomainAction.deleteDomain(data));
    };
    domainPrimary = (domain) => {
        let data = {
            identity: this.props.container.identity,
            domain: domain,
        };
        Comfirmation(this.props.dis, DomainPrimaryAction.domainPut(data));
    };

    domainList = () => {
        let primaryCheck,
            domainDisable = '';
        const renderTooltipDeleteIcon = (props) => (
            <Tooltip className="button-tooltip" {...props}>
                <p>Delete</p>
            </Tooltip>
        );

        return this.props.domainList.map((domain) => {
            if (domain.primary !== false) {
                primaryCheck = (
                    <span class="badge badge-primary ml-2">Primary</span>
                );
            } else {
                primaryCheck = '';
            }
            if (
                domain.status !== 'redirect' &&
                domain.status !== 'active' &&
                domain.status !== 'failed_primary'
            ) {
                domainDisable = 'event-none';
            }

            return (
                <Row className={'no-gutters ' + domainDisable}>
                    <Col lg="8" xs="7">
                        <div className="domain-list domain-status-badge">
                            {domain.domain_name}
                            {primaryCheck}
                        </div>
                    </Col>
                    <Col lg="3 pt-1" xs="3" className="domain-primary-toggle">
                        {domain.primary ? (
                            ''
                        ) : (
                            <SwitchComponent
                                overlay
                                name="force"
                                id={'react-switch-' + domain.id}
                                check={domain.primary}
                                change={() =>
                                    this.domainPrimary(domain.domain_name)
                                }
                                disable={domainDisable}
                                tooltip="Make Primary"
                            />
                        )}
                    </Col>
                    <Col lg="1 d-flex justify-content-center" xs="2">
                        {domain.primary === true || domain.staging === true ? (
                            ''
                        ) : (
                            <span className="domain-trash-icon">
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{
                                        show: 250,
                                        hide: 150,
                                    }}
                                    overlay={renderTooltipDeleteIcon}>
                                    <Button
                                        // data-toggle="tooltip"
                                        // data-placement="top"
                                        // title="Delete"
                                        className={`domain-trash-button ${
                                            this.props.addDomain.loading
                                                ? 'loading'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            this.domainDelete(
                                                domain.domain_name
                                            )
                                        }
                                        disabled={domainDisable}>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="trash-alt"
                                            class="svg-inline--fa fa-trash-alt fa-w-14 "
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                fill="currentColor"
                                                d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"></path>
                                        </svg>
                                    </Button>
                                </OverlayTrigger>
                            </span>
                        )}
                    </Col>
                </Row>
            );
        });
    };

    render() {
        return (
            <Modal
                className="cardmodel domain-model"
                id="domain-modal-width"
                show={this.props.show}
                onHide={this.onHide}>
                <Modal.Header>
                    <Modal.Title>Domain Management</Modal.Title>
                    {this.props.sectionDisable === 'event-none' ||
                    this.props.otherDisable === 'event-none' ? (
                        <p className="text-danger">
                            Your request is in process, operations are
                            restricted for a short time until your process is
                            complete
                        </p>
                    ) : (
                        ''
                    )}
                </Modal.Header>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <Modal.Body
                        className={
                            this.props.sectionDisable || this.props.otherDisable
                        }>
                        {/* <Row> */}
                        {/* <Col md="7" className="col-12">
									<div className="pull-left">
										{
											this.props.container
												.custom_domain_name
										}
									</div>
								</Col> */}
                        {/* <Col md="5" className="col-12"> */}
                        {/* <p>Force www</p> */}
                        {/* Force www{" "}
									<SwitchComponent
										name="force"
										id="react-switch-1"
										change={this.toggleChange}
										check={this.state.form.force}
									/> */}
                        {/* </Col> */}
                        {/* <Col md="6"> */}
                        {/* <SwitchComponent
                                        name="force"
                                        id="react-switch-1"
                                        change={this.toggleChange}
                                        check={this.state.form.force}
                                    /> */}
                        {/* </Col> */}
                        {/* </Row> */}

                        <div
                            className="form-container domain-form-container"
                            id="registration-form">
                            <Row>
                                <Col lg="10">
                                    <Modal.Title className="mb-1">
                                        Add Domain:
                                    </Modal.Title>
                                    <InputTextField
                                        name="new_domain"
                                        getChange={this.handleChange}
                                        value={this.state.form.new_domain}
                                        label="Domain"
                                        schema={DomainValidation}
                                        error={this.state.error}
                                    />
                                    <div className="responive-example-line">
                                        <p
                                            id="domain-text"
                                            className="domain-example-line">
                                            Example: bionicwp.com (without http
                                            and https)
                                        </p>
                                    </div>
                                    {/* <div className="resoponsive-note-line">
                                        <p className="domain-example-line mb-1 ">
                                            <b> Note:</b> domain with (www) will
                                            be added automatically.
                                        </p>
                                    </div> */}
                                </Col>
                                <Col lg="2">
                                    <Button
                                        type="submit"
                                        className={`btn bionic-btn add-domain-btn  ${
                                            this.props.addDomain.loading
                                                ? 'loading'
                                                : ''
                                        }`}>
                                        Add Domain
                                    </Button>
                                </Col>
                            </Row>
                            <div className="domain-modal-scrollable">
                                <Row>
                                    <Col lg="12">
                                        <span className="mb-1 domain-list-text modal-title">
                                            Domain List:
                                        </span>
                                        <span className="mb-1 float-right modal-title make-primary-text">
                                            Primary
                                        </span>
                                    </Col>
                                </Row>

                                {this.domainList()}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className="close-btn"
                            // onClick={()=>this.props.onHide()}
                            onClick={() => this.resetField()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export default DomainModal;
