import React, { Component } from 'react';
import TemplateHalf from 'Templates/TemplateHalf';
import DetailComponent from 'Components/Sites/SiteDashboard/SiteDetail/DetailComponent';
import UpdateDetailComponent from 'Components/Sites/SiteDashboard/SiteDetail/UpdateDetailComponent';
import SFTPDatabaseComponent from 'Components/Sites/SiteDashboard/SiteDetail/SFTPComponent';
import SpeedInsightComponent from 'Components/Sites/SiteDashboard/SiteDetail/SpeedInsightComponent';
import AccessSharingComponent from 'Components/Sites/SiteDashboard/SiteDetail/AccessSharingComponent';
// import SiteSubMenuComponent from "Components/Sites/Ui/SiteSubMenuComponent";
import StagingCreate from 'Components/Staging/StagingCreateComponent';
// import ResourcesComponent from "Components/Sites/SiteDashboard/SiteDetail/ResourcesComponent";
// import LoadingComponent from "Components/UI/LoadingComponent";

import { connect } from 'react-redux';
import 'Assets/css/sitedetail.css';
import ErrorBoundaryComponent from 'Components/UI/ErrorBoundaryComponent';
import PostmarkComponent from './PostmarkComponent';
import TemplateFull from 'Templates/TemplateFull';
import GraphComponent from './GraphComponent';

class SiteDetailComponent extends Component {
    render() {
        const { siteDetail } = this.props;
        const { host } = this.props;

        const {
            sftps,
            container,
            update,
            access_sharing,
            primary_domain,
            backup_details,
            postmark,
        } = this.props.siteDetail;
        const {
            databaseDetail,
            mobilePageSpeed,
            desktopPageSpeed,
            nitroEnable,
            siteSftp,
            googlePageSpeed,
            // siteDetailMain,
        } = this.props;
        /* Condition to hide main component if loading true or api success false */
        // const hide = siteDetailMain.loading || !siteDetailMain.success;
        return (
            <React.Fragment>
                {/* <LoadingComponent data={siteDetailMain} /> */}
                {/* <SiteSubMenuComponent identity={host} active="dashboard" /> */}

                <div className="site-page">
                    <TemplateHalf>
                        <ErrorBoundaryComponent>
                            <DetailComponent
                                host={host}
                                dis={this.props.dispatch}
                                detail={siteDetail}
                                pluginKeyResponse={this.props.pluginReset}
                                hosting={container.hosting}
                            />
                        </ErrorBoundaryComponent>
                        <ErrorBoundaryComponent>
                            <SpeedInsightComponent
                                identity={container.identity}
                                dis={this.props.dispatch}
                                mobileSpeed={mobilePageSpeed}
                                desktopSpeed={desktopPageSpeed}
                                primaryDomain={primary_domain}
                                nitroEnable={nitroEnable}
                                googlePageSpeed={googlePageSpeed}
                                reTestHide={true}
                            />
                        </ErrorBoundaryComponent>
                    </TemplateHalf>
                    <TemplateHalf>
                        <ErrorBoundaryComponent>
                            <SFTPDatabaseComponent
                                host={host}
                                sftps={sftps}
                                sftpLoading={siteSftp.loading}
                                siteDetail={this.props.siteDetail}
                                clickPHP={this.props.phpLogin}
                                dis={this.props.dispatch}
                                databaseDetail={databaseDetail}
                            />
                        </ErrorBoundaryComponent>
                        <ErrorBoundaryComponent>
                            <UpdateDetailComponent
                                host={host}
                                update={update}
                                backupDetail={backup_details}
                                identity={container.identity}
                                visitor={this.props.resources_visitor}
                                bandwidth={this.props.resources_bandwidth}
                                disk={this.props.resources_disk}
                                dis={this.props.dispatch}
                            />
                        </ErrorBoundaryComponent>
                    </TemplateHalf>
                    <TemplateHalf>
                        <AccessSharingComponent
                            host={host}
                            dis={this.props.dispatch}
                            siteAcessSharing={access_sharing}
                            access_sharing={this.props.accessSharing}
                            container={container}
                            siteDetail={this.props.siteDetail}
                        />
                        <StagingCreate
                            dis={this.props.dispatch}
                            identity={container.identity}
                            stagingCreateResponse={this.props.stagingCreate}
                            siteDetail={this.props.siteDetail}
                        />
                    </TemplateHalf>
                    <TemplateFull>
                        <ErrorBoundaryComponent>
                            <PostmarkComponent postmark={postmark} />
                        </ErrorBoundaryComponent>
                    </TemplateFull>
                    <TemplateFull>
                        {container.identity ? (
                            <GraphComponent
                                identity={container.identity}
                                data={this.props.upTimeReport}
                                type="area"
                                height={320}
                                dispatch={this.props.dispatch}
                                className="wp-chart graph-box"
                            />
                        ) : (
                            ''
                        )}
                    </TemplateFull>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        siteDetail: state.SiteDetailReducer.site_detail,
        siteSftp: state.site.feature.siteSftp,
        pluginReset: state.site.feature.pluginReset,
        phpLogin: state.site.feature.phpLogin,
        accessSharing: state.site.feature.accessSharing,
        siteDetailLoading: state.SiteDetailReducer,
        stagingCreate: state.staging.create,
        databaseDetail: state.SiteDetailReducer.database_detail,
        resources_visitor: state.SiteDetailReducer.visitor,
        resources_bandwidth: state.SiteDetailReducer.bandwidth,
        resources_disk: state.SiteDetailReducer.disk,
        mobilePageSpeed: state.SiteDetailReducer.mobile_speed,
        desktopPageSpeed: state.SiteDetailReducer.desktop_speed,
        nitroEnable: state.site.addon.nitroEnable,
        siteDetailMain: state.SiteDetailReducer,
        googlePageSpeed: state.SiteDetailReducer.site_detail.google_page_speed,
        upTimeReport: state.site.upTime.up_time_report,
    };
}

export default connect(mapStateToProps)(SiteDetailComponent);
