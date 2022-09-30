import React, { Component } from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';
import BackupListAction from 'Redux/V1/Sites/Backups/Backup/Get/BackupGetAction';
import BackupCreateAction from 'Redux/V1/Sites/Backups/Backup/Post/BackupPostAction';
import BackupRestoreAction from 'Redux/V2/Sites/Backups/Backup/BackupRestore/BackupRestoreActionV2';
import BackupDataBusiness from 'Businesses/SiteBackup/BackupDataBusiness';
import ConfirmationHelper from 'Helpers/ConfirmationHelper';
import NoDataHelper from 'Helpers/NoDataHelper';
import BackupDownloadActionV2 from 'Redux/V2/Sites/Backups/Backup/BackupDownload/BackupDownloadActionV2';
import Pagination from 'Components/Pagination/PaginationComponent';
import 'Assets/css/Responsive/SiteDetailBackups.css';
import Messages from 'Languages/En.lang';

class BackupData extends Component {
    state = {
        value: null,
    };
    componentDidMount() {
        setTimeout(() => {
            this.props.dis(BackupListAction.backupGet(this.props.identity));
        }, 1500);
    }

    backupDataCreateFunction = () => {
        this.props.dis(BackupCreateAction.backupPost(this.props.identity));
    };

    // backupDataRestoreFunction = (backupId) => {
    //     const data = {
    //         backupId: backupId,
    //         identity: this.props.identity,
    //     };
    //     ConfirmationHelper(
    //         this.props.dis,
    //         BackupRestoreActionV2.backupRestore(data),
    //         "Do you really want to restore this backup ?"
    //     );
    // };
    // backupDownloadFunction = (backupId) => {
    //     const data = {
    //         backupId: backupId,
    //         identity: this.props.identity,
    //     };
    //     ConfirmationHelper(
    //         this.props.dis,
    //         BackupDownloadActionV2.backupDownload(data),
    //         "Do you really want to download this backup ?"
    //     );
    // };
    backupFunction = (e, backup, cloudProvider) => {
        const data = {
            backupId: backup.id,
            identity: this.props.identity,
            type: backup.type,
            cp: cloudProvider,
        };
        if (e.target.value === 'download') {
            ConfirmationHelper(
                this.props.dis,
                BackupDownloadActionV2.backupDownload(data),
                'Do you really want to download this backup ?'
            );
        } else if (e.target.value === 'restore') {
            ConfirmationHelper(
                this.props.dis,
                BackupRestoreAction.backupRestore(data),
                'Do you really want to restore this backup ?'
            );
        }
    };
    render() {
        // const createLoading = this.props.create.loading;
        const backupList = this.props.list;
        const restore = this.props.restore;
        const backupDownload = this.props.download;
        const backupListLoading = this.props.loading;
        const { cloud_provider } = this.props.containerInfo;

        return (
            <React.Fragment>
                <Row className="mt-3 mb-3">
                    <Col lg={8} className="">
                        <h6>Daily Backup</h6>
                        <p>{Messages.site_backups.daily_backup.text}</p>
                    </Col>
                    <Col lg={4} className="text-right align-self-top">
                        {cloud_provider === 'GCP' ? (
                            <Button
                                // className={`wpadmin-btn bionic-btn ml-0 mt-3 create-backup-button ${
                                //     createLoading ? "loading" : ""
                                // }`}
                                className={`wpadmin-btn bionic-btn ml-0 mt-3 create-backup-button `}
                                disabled={
                                    cloud_provider !== 'GCP' ? true : false
                                }
                                title={
                                    cloud_provider !== 'GCP'
                                        ? 'Feature not available with this provider'
                                        : 'Create Backup'
                                }
                                onClick={this.backupDataCreateFunction}>
                                Create Backup
                            </Button>
                        ) : null}
                    </Col>
                </Row>

                <div className="pt-3 pb-3 site-backups-heading">
                    <Row>
                        <Col lg="5" className="col-5">
                            <b className="pl-4">Created</b>
                        </Col>
                        <Col lg="2" className="col-2 text-left">
                            <div className="pl-3 performed-by-title">
                                {' '}
                                <b>Type</b>
                            </div>
                        </Col>
                        <Col lg="2" className="col-2 text-left">
                            <div className="pl-3 performed-by-title">
                                {' '}
                                <b>Performed By</b>
                            </div>
                        </Col>
                        <Col
                            lg="2"
                            className="pl-4 col-5 text-left backup-center">
                            <b>Actions</b>
                        </Col>
                    </Row>
                </div>
                <div className="box backup-list">
                    <ListGroup>
                        {BackupDataBusiness.backupGenerate(
                            backupList,
                            this.backupFunction,
                            restore,
                            backupDownload,
                            cloud_provider
                        )}
                        {NoDataHelper.available(backupList, backupListLoading)}
                    </ListGroup>
                </div>
                {NoDataHelper.available(backupList, backupListLoading) ? (
                    ''
                ) : (
                    <Pagination
                        title={'Backup'}
                        perPage={this.props.pagination.per_page}
                        totalPages={this.props.pagination.total_pages}
                        currentPage={this.props.pagination.current_page}
                    />
                )}
            </React.Fragment>
        );
    }
}

export default BackupData;
