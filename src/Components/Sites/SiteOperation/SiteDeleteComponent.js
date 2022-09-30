import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SiteDeleteAction from 'Redux/V1/Sites/Site/Delete/SiteDeleteAction';
import SiteDeleteActionV2 from 'Redux/V2/Sites/Site/Delete/SiteDeleteActionV2';
import Confirmation from 'Helpers/ConfirmationHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import SiteDeleteCancelAction from 'Redux/V1/Sites/Site/SiteDeleteCancel/SiteDeleteCancelAction';
import StagingDeleteAction from 'Redux/V1/Staging/Delete/StagingDeleteAction';
import TimeStampHelper from 'Helpers/TimeStampHelper';
import Messages from 'Languages/En.lang';
class SiteDeleteComponent extends Component {
    deleteSite = () => {
        const data = {
            identity: this.props.siteDetail.site_detail.container.identity,
            host: this.props.siteDetail.site_detail.primary_domain,
        };
        Confirmation(
            this.props.dis,
            SiteDeleteAction.siteDelete(data),
            'Site will be deleted on billing date'
        );
    };
    siteDeleteimmediateFunction = () => {
        const data = {
            identity: this.props.siteDetail.site_detail.container.identity,
            host: this.props.siteDetail.site_detail.primary_domain,
        };
        Confirmation(
            this.props.dis,
            SiteDeleteActionV2.siteDelete(data),
            'Site will be deleted immediately'
        );
    };
    deleteCancelReq = () => {
        const data = {
            identity: this.props.siteDetail.site_detail.container.identity,
            host: this.props.siteDetail.site_detail.primary_domain,
        };
        Confirmation(
            this.props.dis,
            SiteDeleteCancelAction.siteDeleteCancel(data),
            'Site will not be deleted anymore'
        );
    };

    stagingDelete = () => {
        const data = {
            identity: this.props.siteDetail.site_detail.container.identity,
        };
        Confirmation(
            this.props.dis,
            StagingDeleteAction.stagingDelete(data),
            'Staging will be deleted'
        );
    };
    render() {
        const siteType = this.props.siteDetail.site_detail.site_type;
        const immediateDelete =
            this.props.siteDetail.site_detail.immediate_delete;
        return (
            <React.Fragment>
                <div className="box block-danger">
                    <Row>
                        <Col lg="7">
                            <FontAwesomeIcon icon={faTrashAlt} />
                            <div className="operation-title">
                                {siteType !== 'staging'
                                    ? 'Delete Site'
                                    : 'Delete Staging'}
                            </div>
                            <div className="operation-desc">
                                {Messages.site_operations.site_delete.text}
                            </div>
                        </Col>
                        <Col lg="5" className="text-right">
                            {siteType !== 'staging' &&
                            this.props.siteDetail.site_detail.container
                                .destroy_at ? (
                                <React.Fragment>
                                    <Button
                                        className={`mt-4 btn-danger pl-3 pr-3 ${
                                            this.props.siteDeleteCancel.loading
                                                ? 'loading'
                                                : ''
                                        }`}
                                        onClick={this.deleteCancelReq}>
                                        Cancel Delete Request
                                    </Button>
                                    <p className="text-danger mt-1">
                                        {'Deletion Date: ' +
                                            TimeStampHelper.standardDateFormat(
                                                this.props.siteDetail
                                                    .site_detail.container
                                                    .destroy_at
                                            )}
                                    </p>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {siteType !== 'staging' ? (
                                        immediateDelete ? (
                                            <Button
                                                className={`mt-4 btn-danger ${
                                                    this.props.deleteSite
                                                        .loading
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                onClick={
                                                    this
                                                        .siteDeleteimmediateFunction
                                                }>
                                                Delete Site
                                            </Button>
                                        ) : (
                                            <Button
                                                className={`mt-4 btn-danger ${
                                                    this.props.deleteSite
                                                        .loading
                                                        ? 'loading'
                                                        : ''
                                                }`}
                                                onClick={this.deleteSite}>
                                                Delete Site
                                            </Button>
                                        )
                                    ) : (
                                        <Button
                                            className={`mt-4 btn-danger ${
                                                this.props.stagingDelete.loading
                                                    ? 'loading'
                                                    : ''
                                            }`}
                                            onClick={this.stagingDelete}>
                                            Delete Staging
                                        </Button>
                                    )}
                                </React.Fragment>
                            )}
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default SiteDeleteComponent;
