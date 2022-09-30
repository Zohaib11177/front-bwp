import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PostDomainAction from 'Redux/V1/Sites/Domain/Post/Action';
import DeleteDomainAction from 'Redux/V1/Sites/Domain/Delete/Action';
import DomainModal from 'Components/Sites/Domain/DomainModal';
import DomainListAction from 'Redux/V1/Domain/Get/DomainGetAction';
import DomainBusiness from 'Businesses/DomainBusiness';
import Capitilize from 'Helpers/CapitilizeHelper';
import { connect } from 'react-redux';
import SslBusiness from 'Businesses/SslBusiness';
import 'Assets/css/sitedetail.css';
import TextLimitHelper from 'Helpers/TextLimitHelper';
import 'Assets/css/Responsive/SiteDetailDomain.css';
import PermissionBusiness from 'Businesses/PermissionBusiness';

class DomainComponent extends Component {
    state = {
        domain_modal: false,
    };

    domainToggleModal = () => {
        const { domain_modal } = this.state;
        this.setState({
            domain_modal: !domain_modal,
        });
    };
    componentDidMount() {
        this.props.dispatch(
            DomainListAction.domainGet(this.props.container.identity)
        );
    }

    domainModal = () => {
        if (this.props.container || false) {
            return (
                <DomainModal
                    show={this.state.domain_modal}
                    onHide={this.domainToggleModal}
                    dis={this.props.dispatch}
                    container={this.props.container}
                    addDomain={this.props.add_domain}
                    deleteDomainRes={this.props.delete_domain}
                    postDomain={(e) =>
                        this.props.dispatch(PostDomainAction.postDomain(e))
                    }
                    deleteDomain={DeleteDomainAction.deleteDomain(
                        this.props.container.identity
                    )}
                    forceRedirect={this.props.force_redirect}
                    domainList={this.props.domain_list.domains}
                    sectionDisable={DomainBusiness.validateStatus(
                        this.props.domain_list.domains
                    )}
                    otherDisable={SslBusiness.validateStatus(
                        this.props.domain_list
                    )}
                />
            );
        }
    };

    domainList = () => {
        const domains = this.props.domain_list.domains.filter((domain) => {
            return domain.status !== 'redirect';
        });
        let status = '';
        return domains.map((domain) => {
            if (
                domain.status === 'active' ||
                domain.status === 'request_primary' ||
                domain.status === 'failed_primary'
            ) {
                status = domain.status;
            } else {
                status = '';
            }
            return (
                <Row>
                    <Col md="6" xs="8" className="domain-name">
                        {TextLimitHelper.limit(domain.domain_name, 30)}{' '}
                    </Col>
                    <Col
                        md="4"
                        xs="4"
                        className="update-desc mt-0 ml-4 domain-status-value">
                        {Capitilize.capital(
                            status === 'request_primary'
                                ? 'Request primary'
                                : status
                        )}
                    </Col>
                    {/* <Col md="3" className="update-desc mt-1 ">
                        {" "}
                        <Button
                            className="updatebtn mt-1"
                            onClick={this.domainToggleModal}
                        >
                            Domain Setting
                        </Button>
                    </Col> */}
                </Row>
            );
        });
    };
    render() {
        const permissionDenied = !PermissionBusiness.operationPermission(
            ['domains_add'],
            1
        )
            ? true
            : false;

        return (
            <React.Fragment>
                <div className="box domain-box-main">
                    <Row>
                        <Col lg="9" xs="12">
                            <div className="page-header">Domain Management</div>
                            <div className="">
                                <Row>
                                    <Col md="6" xs="8">
                                        <b className="update-title">
                                            Domain Name
                                        </b>
                                    </Col>
                                    <Col md="4" xs="4">
                                        <b className="update-title pl-4 domain-status-title">
                                            {' '}
                                            Domain Status
                                        </b>
                                    </Col>
                                </Row>
                                {/* <p>{container.primary_domain_name}</p> */}
                                <div className="update-desc">
                                    {' '}
                                    {this.domainList()}
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" className="domain-btn-col">
                            <Button
                                onClick={this.domainToggleModal}
                                className={`updatebtn bionic-btn domain-setting-button btn`}
                                disabled={permissionDenied}>
                                Domain Setting
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {this.props.container.cloud_provider === 'PA' ||
                        this.props.container.cloud_provider === 'BO' ? (
                            <Col lg="12" className="domain-btn-col">
                                <p>
                                    Note: SSL should auto install with in 30
                                    minutes of add domain.
                                </p>
                            </Col>
                        ) : (
                            ''
                        )}
                    </Row>
                </div>
                {this.domainModal()}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        add_domain: state.PostDomainReducer,
        delete_domain: state.DeleteDomainReducer,
        force_redirect: state.forceRedirect,
        domain_list: state.domainList,
    };
}
export default connect(mapStateToProps)(DomainComponent);
