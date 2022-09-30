import React, { Component } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import TemplateMain from 'Templates/TemplateMain';
import 'Assets/css/sitedetail.css';
import 'Assets/css/siteoperation.css';
import TemplateSideRight from 'Templates/TemplateSidebarRight';
import SiteSubMenuComponent from './Ui/SiteSubMenuComponent';
import Configs from 'Configs';
import SiteAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import NginxRestartAction from 'Redux/V1/Sites/Operations/NginxRestart/NginxRestartAction';
import RestartPhpAction from 'Redux/V1/Sites/Operations/PHPRestart/PHPRestartAction';
import ResetPermissionAction from 'Redux/V1/Sites/Operations/PermissionReset/PermissionResetAction';
import SiteDeleteAction from 'Redux/V1/Sites/Site/Delete/SiteDeleteAction';
import Confirmation from 'Helpers/ConfirmationHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSync,
    faTrashAlt,
    faKey,
    faBroom,
} from '@fortawesome/fontawesome-free-solid';
import { connect } from 'react-redux';
import PermissionHelper from 'Helpers/PermissionHelper';
import ClearCacheAction from 'Redux/V1/Sites/Operations/CacheClear/CacheClearAction';
import DeleteCancelAction from 'Redux/V1/SiteDeleteCancel/DeleteCancelPutAction';
import StagingDeleteAction from 'Redux/V1/Staging/Delete/StagingDeleteAction';
import TimeStampHelper from 'Helpers/TimeStampHelper';
import SyncEnvironment from 'Components/Staging/SyncEnvironmentComponent';
import Messages from 'Languages/En.lang';

class SiteOperationComponent extends Component {
    componentWillMount = () => {
        this.props.dispatch(
            SiteAction.getSiteDetail(this.props.match.params.host)
        );
    };

    restartNginx = () => {
        this.props.dispatch(
            NginxRestartAction.restartNginx(
                this.props.SiteDetail.site_detail.container.identity
            )
        );
    };

    restartPhp = () => {
        this.props.dispatch(
            RestartPhpAction.restartPhp(
                this.props.SiteDetail.site_detail.container.identity
            )
        );
    };

    resetPermission = () => {
        this.props.dispatch(
            ResetPermissionAction.resetPermission(
                this.props.SiteDetail.site_detail.container.identity
            )
        );
    };

    deleteSite = () => {
        const data = {
            identity: this.props.SiteDetail.site_detail.container.identity,
            host: this.props.SiteDetail.site_detail.primary_domain,
        };
        Confirmation(
            this.props.dispatch,
            SiteDeleteAction.siteDelete(data),
            'Site will be deleted on billing date'
        );
    };
    deleteCancelReq = () => {
        const data = {
            identity: this.props.SiteDetail.site_detail.container.identity,
            host: this.props.SiteDetail.site_detail.primary_domain,
        };
        Confirmation(
            this.props.dispatch,
            DeleteCancelAction.deletePut(data),
            'Site will not be deleted anymore'
        );
    };
    clearCache = () => {
        this.props.dispatch(
            ClearCacheAction.clearCache(
                this.props.SiteDetail.site_detail.container.identity
            )
        );
    };
    stagingDelete = () => {
        const data = {
            identity: this.props.SiteDetail.site_detail.container.identity,
        };
        Confirmation(
            this.props.dispatch,
            StagingDeleteAction.stagingDelete(data),
            'Staging will be deleted'
        );
    };
    render() {
        const siteType = this.props.SiteDetail.site_detail.site_type;
        const stagingDomain = this.props.SiteDetail.site_detail.staging || {};
        return (
            <React.Fragment>
                <TemplateMain>
                    <SiteSubMenuComponent
                        identity={this.props.match.params.host}
                        active="operations"
                        site={this.props.SiteDetail.site_detail}
                    />
                    <div className="site-operation-page">
                        <TemplateSideRight>
                            <div className="site-update-left">
                                <div className="box">
                                    <Row>
                                        <Col lg="8">
                                            <FontAwesomeIcon icon={faSync} />
                                            <div className="operation-title">
                                                Restart PHP
                                            </div>
                                            <div className="operation-desc">
                                                {
                                                    Messages.site_operations
                                                        .restart_php.text
                                                }
                                            </div>
                                        </Col>
                                        <Col
                                            lg="4"
                                            className="text-right align-self-center">
                                            <Button
                                                className={`updatebtn ${
                                                    this.props.RestartPhp
                                                        .loading
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                onClick={this.restartPhp}>
                                                Restart PHP
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>

                                {/* Permission manager */}
                                {PermissionHelper.validate([
                                    'account_nerd_mode',
                                ]) ? (
                                    <div className="box">
                                        <Row>
                                            <Col lg="8">
                                                <img
                                                    src={`${Configs.public_url}/assets/img/nginx-6.png`}
                                                    alt="Nginx"
                                                    width="25"
                                                />
                                                <div className="operation-title">
                                                    Restart Nginx
                                                </div>
                                                <div className="operation-desc">
                                                    {
                                                        Messages.site_operations
                                                            .restart_nginx.text
                                                    }
                                                </div>
                                            </Col>
                                            <Col lg="4" className="text-right">
                                                <Button
                                                    className={`updatebtn ${
                                                        this.props.RestartNginx
                                                            .loading
                                                            ? 'loading'
                                                            : ''
                                                    }`}
                                                    onClick={this.restartNginx}>
                                                    Restart Nginx
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                ) : null}

                                <div className="box">
                                    <Row>
                                        <Col lg="8">
                                            <FontAwesomeIcon icon={faKey} />
                                            <div className="operation-title">
                                                Reset Permissions
                                            </div>
                                            <div className="operation-desc">
                                                {
                                                    Messages.site_operations
                                                        .reset_permission.text
                                                }
                                            </div>
                                        </Col>
                                        <Col
                                            lg="4"
                                            className="text-right align-self-center">
                                            <Button
                                                className={`updatebtn ${
                                                    this.props.ResetPermission
                                                        .loading
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                onClick={this.resetPermission}>
                                                Reset Permissions
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="box">
                                    <Row>
                                        <Col lg="8">
                                            <FontAwesomeIcon icon={faBroom} />
                                            <div className="operation-title">
                                                Clear Cache
                                            </div>
                                            <div className="operation-desc">
                                                {
                                                    Messages.site_operations
                                                        .clear_cache.text
                                                }
                                            </div>
                                        </Col>
                                        <Col
                                            lg="4"
                                            className="text-right align-self-center">
                                            <Button
                                                className={`updatebtn ${
                                                    this.props.clear_cache
                                                        .loading
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                onClick={this.clearCache}>
                                                Clear Cache
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                                {Object.keys(stagingDomain).length === 0 &&
                                siteType === 'live' ? (
                                    ''
                                ) : (
                                    <SyncEnvironment
                                        dis={this.props.dispatch}
                                        sync={this.props.stagingSync}
                                        siteDetail={this.props.SiteDetail}
                                    />
                                )}
                                <div className="box block-danger">
                                    <Row>
                                        <Col lg="7">
                                            <FontAwesomeIcon
                                                icon={faTrashAlt}
                                            />
                                            <div className="operation-title">
                                                {siteType !== 'staging'
                                                    ? 'Delete Site'
                                                    : 'Delete Staging'}
                                            </div>
                                            <div className="operation-desc">
                                                Click here to Delete Your Site.
                                                Please note this operation is
                                                irreversible and all data would
                                                be deleted immediately.
                                            </div>
                                        </Col>
                                        <Col
                                            lg="5"
                                            className="text-right align-center-center">
                                            {this.props.SiteDetail.site_detail
                                                .container.destroy_at ? (
                                                <React.Fragment>
                                                    <Button
                                                        className={`mt-4 btn-danger pl-3 pr-3 `}
                                                        onClick={
                                                            this.deleteCancelReq
                                                        }>
                                                        Cancel Delete Request
                                                    </Button>
                                                    <p className="text-danger mt-1">
                                                        {'Deletion Date: ' +
                                                            TimeStampHelper.standardDateFormat(
                                                                this.props
                                                                    .SiteDetail
                                                                    .site_detail
                                                                    .container
                                                                    .destroy_at
                                                            )}
                                                    </p>
                                                </React.Fragment>
                                            ) : (
                                                <React.Fragment>
                                                    {siteType !== 'staging' ? (
                                                        <Button
                                                            className={`mt-4 btn-danger ${
                                                                this.props
                                                                    .DeleteSite
                                                                    .loading
                                                                    ? 'loading'
                                                                    : ''
                                                            }`}
                                                            onClick={
                                                                this.deleteSite
                                                            }>
                                                            Delete Site
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            className={`mt-4 btn-danger ${
                                                                this.props
                                                                    .stagingDelete
                                                                    .loading
                                                                    ? 'loading'
                                                                    : ''
                                                            }`}
                                                            onClick={
                                                                this
                                                                    .stagingDelete
                                                            }>
                                                            Delete Staging
                                                        </Button>
                                                    )}
                                                </React.Fragment>
                                            )}
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="site-update-right  ">
                                <div className="box overlay-grey ">
                                    <Row>
                                        <Col lg="12">
                                            <div className="page-header">
                                                Timeline
                                            </div>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </TemplateSideRight>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        SiteDetail: state.SiteDetailReducer,
        RestartPhp: state.RestartPhpReducer,
        RestartNginx: state.RestartNginxReducer,
        ResetPermission: state.ResetPermissionReducer,
        DeleteSite: state.DeleteSiteReducer,
        clear_cache: state.clearCache,
        stagingDelete: state.staging.delete,
        stagingSync: state.staging.sync,
    };
}
export default connect(mapStateToProps)(SiteOperationComponent);
