import React, { Component } from 'react';
import 'Assets/css/Responsive/Footer.css';
import { connect } from 'react-redux';
import copyIcon from 'Assets/img/copy-icon.svg';
import { Button, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import ClipBoardHelper from 'Helpers/ClipBoardHelper';
import ErrorBusiness from 'Businesses/ErrorBusiness';
import settingIcon from 'Assets/img/setting-icon-white.svg';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import DomainValidation from 'Validations/DomainValidation';
import Confirmation from 'Helpers/ConfirmationHelper';
import DomainDeleteActionV6 from 'Redux/V6/Sites/Domain/Delete/DomainDeleteActionV6';
import DomainPostActionV6 from 'Redux/V6/Sites/Domain/Post/DomainPostActionV6';
import DomainPrimaryActionV6 from 'Redux/V6/Sites/Domain/Put/DomainPutActionV6';
class SiteDomainComponentV6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            form: {
                new_domain: '',
            },
        };
    }
    changePrimary = (e) => {
        let data = {
            host: this.props.host,
            domain: e.target.value,
        };
        Confirmation(
            this.props.dispatch,
            DomainPrimaryActionV6.domainPut(data)
        );
    };

    domainDelete = (domain) => {
        let data = {
            host: this.props.host,
            domain: domain,
        };
        Confirmation(
            this.props.dispatch,
            DomainDeleteActionV6.deleteDomain(data)
        );
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { form } = this.state;
        form.old_domain =
            this.props.site_detail_v6.container.primary_domain_name;

        const data = {
            host: this.props.host,
            form,
        };
        DomainValidation.validate(this.state.form, { abortEarly: false })
            .then(() => {
                this.props.dispatch(DomainPostActionV6.postDomain(data));
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
    render() {
        const renderTooltipDeleteIcon = (props) => (
            <Tooltip className="button-tooltip" {...props}>
                <p>Delete</p>
            </Tooltip>
        );
        const { site_detail, domain_info } = this.props.site_detail_v6;
        const ipAddress =
            site_detail.ip_address !== null
                ? site_detail.ip_address.split('-')
                : [];

        return (
            <React.Fragment>
                <div className="card-blue mt-5-mobo mb-4 card-sm-adj">
                    <div className="card-blue--header">
                        <span>Domain Management</span>
                        <span>
                            <img
                                className="card-header-icon"
                                src={settingIcon}
                                alt="settingIcon"
                                onClick={() => this.setState({ show: true })}
                            />
                        </span>
                    </div>
                    <div className="card-blue--content p-adj">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-field--wrapper mb-2">
                                    <div className="tf-text">
                                        <span className="font-14 f-adj">
                                            Domain:
                                        </span>
                                    </div>
                                    <div className="tf-field">
                                        <form
                                            method="POST"
                                            onSubmit={this.handleSubmit}>
                                            <InputTextField
                                                name="new_domain"
                                                getChange={this.handleChange}
                                                value={
                                                    this.state.form.new_domain
                                                }
                                                label="-"
                                                schema={DomainValidation}
                                                error={this.state.error}
                                            />
                                            {/* <input
                                                    type="text"
                                                    className="form-control font-13 mr-2"
                                                    placeholder="Select/Add Domain"
                                                /> */}
                                            <button
                                                className={`btn btn-primary btn-bionic px-4 ${
                                                    this.props.domain.loading
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                type="submit">
                                                Add
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="text-field--wrapper mb-2">
                                    <div className="tf-text">
                                        <span className="font-14 f-adj">
                                            Primary Domain:
                                        </span>
                                    </div>
                                    <div className="tf-field">
                                        <select
                                            name="plan"
                                            id="plan"
                                            onChange={(e) =>
                                                this.changePrimary(e)
                                            }
                                            class="form-control font-14 cursor-pointer  ">
                                            {domain_info.domains.map((item) => (
                                                <option
                                                    value={item.domain_name}
                                                    selected={
                                                        item.primary
                                                            ? true
                                                            : false
                                                    }>
                                                    {item.domain_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="text-field--wrapper">
                                    <div className="tf-text">
                                        <span className="font-14 f-adj">
                                            IP Address:
                                        </span>
                                    </div>
                                    <div className="tf-field">
                                        <span className="font-14 light-txt-color cp-align">
                                            {ipAddress.map((ip) => {
                                                return (
                                                    <>
                                                        <div className="copy-text-wrap">
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                delay={{
                                                                    show: 250,
                                                                    hide: 150,
                                                                }}
                                                                overlay={
                                                                    <Tooltip className="button-tooltip">
                                                                        <p>
                                                                            {ip}
                                                                        </p>
                                                                    </Tooltip>
                                                                }>
                                                                <span>
                                                                    {ip}
                                                                </span>
                                                            </OverlayTrigger>
                                                            <Button
                                                                onClick={() =>
                                                                    ClipBoardHelper.copy(
                                                                        ip
                                                                    )
                                                                }
                                                                type="text"
                                                                className="no-btn">
                                                                <img
                                                                    className="icon-copy copy ml-2"
                                                                    src={
                                                                        copyIcon
                                                                    }
                                                                    alt="copyIcon"
                                                                />
                                                            </Button>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    dialogClassName="modal-90w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Domains
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div
                            className="form-container domain-form-container"
                            id="registration-form">
                            <div className="domain-modal-scrollable">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="mb-1 domain-list-text modal-title">
                                            Domain List:
                                        </span>
                                        <span class="mb-1 domain-list-text modal-title float-right make-primary-text">
                                            Delete
                                        </span>
                                    </div>
                                </div>
                                {domain_info.domains.map((item) => {
                                    return (
                                        <div class="no-gutters  row">
                                            <div class="col-lg-8 col-7">
                                                <div class="domain-list domain-status-badge">
                                                    {item.domain_name}
                                                    {item.primary ? (
                                                        <span class="badge badge-primary ml-2">
                                                            Primary
                                                        </span>
                                                    ) : (
                                                        ''
                                                    )}
                                                </div>
                                            </div>
                                            <div class="col-lg-4 d-flex justify-content-center col-2">
                                                {item.primary === true ||
                                                item.staging === true ? null : (
                                                    <span className="domain-trash-icon">
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            delay={{
                                                                show: 250,
                                                                hide: 150,
                                                            }}
                                                            overlay={
                                                                renderTooltipDeleteIcon
                                                            }>
                                                            <Button
                                                                onClick={(e) =>
                                                                    this.domainDelete(
                                                                        item.domain_name
                                                                    )
                                                                }
                                                                className={`domain-trash-button ${
                                                                    this.props
                                                                        .site_detail_v6
                                                                        .loading
                                                                        ? 'loading'
                                                                        : ''
                                                                }`}>
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
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        site_detail_v6: store.siteV6.siteV6.detail,
        domain: store.siteV6.domainV6.create,
    };
}

export default connect(mapStateToProps)(SiteDomainComponentV6);
