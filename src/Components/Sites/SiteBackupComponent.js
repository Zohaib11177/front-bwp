import React, { Component } from 'react';
import { Row, Col, Tab, Nav, Badge } from 'react-bootstrap';
import TemplateMain from 'Templates/TemplateMain';
import TemplateFull from 'Templates/TemplateFull';
import SiteSubMenuComponent from './Ui/SiteSubMenuComponent';
import BackupData from 'Components/Sites/Backup/BackupDataComponent';
// import SiteAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import SiteClone from 'Components/Sites/SiteCloneComponent';
import { connect } from 'react-redux';
import 'Assets/css/sitebackup.css';
import BackupListAction from 'Redux/V1/Sites/Backups/Backup/Get/BackupGetAction';
import SiteListAction from 'Redux/V1/Sites/Site/Get/SiteGetAction';
import SiteDashboardMessageComponent from 'Components/Sites/SiteDashboard/SiteDashboardMessageComponent';
import SiteCloneForm from 'Components/Forms/SiteCloneForm';
class SiteBackupComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.props.dispatch(
    //         SiteAction.getSiteDetail(this.props.match.params.host)
    //     );
    // }
    handleSelect = (key) => {
        const url = new URL(window.location.href.split('?')[0]);
        if (key === 'clone') {
            localStorage.setItem('defaultKey', 'clone');
            window.history.replaceState(null, null, url);
            this.props.dispatch(SiteListAction.siteGet());
        } else {
            localStorage.setItem('defaultKey', 'backup_data');
            window.history.replaceState(null, null, url);
            this.props.dispatch(
                BackupListAction.backupGet(
                    this.props.details.site_detail.container.identity
                )
            );
        }
    };
    render() {
        const { identity, cloud_provider } =
            this.props.details.site_detail.container;
        const siteHost = this.props.match.params.host;
        const siteDetail = this.props.details.site_detail;
        const backupList = this.props.backupList.backup_list;
        const backupCreate = this.props.backupCreate;
        const backupRestore = this.props.backupRestore;
        const dispatch = this.props.dispatch;
        const backupDownload = this.props.backupDownload;
        const { pagination } = this.props.backupList;
        const databaseDetail = this.props.databaseDetail;
        const clonePagination = this.props.siteList.pagination;
        let defaultKey;
        const defaultTab = localStorage.getItem('defaultKey');
        if (defaultTab === 'clone') {
            defaultKey = 'clone';
        } else defaultKey = 'backup_data';
        const { parent } = this.props.details.site_detail;
        const backupListLoading = this.props.backupList.loading;
        return (
            <React.Fragment>
                {' '}
                <SiteDashboardMessageComponent
                    siteDetail={this.props.details.site_detail}
                />
                <TemplateMain>
                    <SiteSubMenuComponent
                        active="backups"
                        identity={siteHost}
                        site={siteDetail}
                        iden={parent ? parent.identity : null}
                    />
                    <div className="site-backup-page">
                        <TemplateFull>
                            <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey={defaultKey}
                                onSelect={this.handleSelect}>
                                <Row>
                                    <Col sm={12}>
                                        <Nav variant="tabs" className="">
                                            <Nav.Item>
                                                <Nav.Link
                                                    eventKey="backup_data"
                                                    // disabled={}
                                                >
                                                    Daily Backup
                                                    <Badge
                                                        className="backup-count"
                                                        variant="primary">
                                                        {pagination
                                                            ? pagination.total
                                                            : 0}
                                                    </Badge>
                                                </Nav.Link>
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                                <Nav.Link eventKey="snapshot">
                                                    Snapshot
                                                    <Badge
                                                        className="backup-count"
                                                        variant="primary"
                                                    >
                                                        {ArrayCount.count(
                                                            snapshotList
                                                        ) > 0
                                                            ? 1
                                                            : 0}
                                                    </Badge>
                                                </Nav.Link>
                                            </Nav.Item> */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="clone">
                                                    Clone
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="backup_data">
                                                {identity ? (
                                                    <BackupData
                                                        dis={dispatch}
                                                        identity={identity}
                                                        list={backupList}
                                                        create={backupCreate}
                                                        restore={backupRestore}
                                                        cloudProvider={
                                                            cloud_provider
                                                        }
                                                        download={
                                                            backupDownload
                                                        }
                                                        pagination={pagination}
                                                        loading={
                                                            backupListLoading
                                                        }
                                                        containerInfo={
                                                            this.props.details
                                                                .site_detail
                                                                .container
                                                        }
                                                    />
                                                ) : (
                                                    ''
                                                )}
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="clone">
                                                {cloud_provider === 'GCP' ? (
                                                    <SiteClone
                                                        sites={
                                                            this.props.siteList
                                                                .site_list
                                                        }
                                                        identity={identity}
                                                        dis={
                                                            this.props.dispatch
                                                        }
                                                        cloneResponse={
                                                            this.props.siteClone
                                                        }
                                                        databaseDetail={
                                                            databaseDetail || {}
                                                        }
                                                        pagination={
                                                            clonePagination
                                                        }
                                                    />
                                                ) : (
                                                    <SiteCloneForm
                                                        dispatch={
                                                            this.props.dispatch
                                                        }
                                                        identity={identity}
                                                        siteCloneForm={
                                                            this.props
                                                                .siteCloneForm
                                                        }
                                                    />
                                                )}
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </TemplateFull>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        details: state.SiteDetailReducer,
        snapshotList: state.site.backup.snapshotList,
        snapshotCreate: state.site.backup.snapshotCreate,
        snapshotRestore: state.site.backup.snapshotRestore,
        backupList: state.site.backup.backupList,
        backupCreate: state.site.backup.backupCreate,
        backupRestore: state.site.backup.backupRestore,
        siteClone: state.site.feature.siteClone,
        siteCloneForm: state.site.feature.siteCloneForm,
        siteList: state.site.site.list,
        backupDownload: state.siteV2.backupV2.backupDownloadV2,
        databaseDetail: state.SiteDetailReducer.site_detail.database_detail,
    };
}

export default connect(mapStateToProps)(SiteBackupComponent);
