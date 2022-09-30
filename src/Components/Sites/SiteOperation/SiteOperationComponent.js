import React, { Component } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sitedetail.css";
import "Assets/css/siteoperation.css";
import TemplateSideRight from "Templates/TemplateSidebarRight";
import SiteSubMenuComponent from "../Ui/SiteSubMenuComponent";
// import SiteAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import NginxRestartAction from "Redux/V1/Sites/Operations/NginxRestart/NginxRestartAction";
import PhpRestartAction from "Redux/V1/Sites/Operations/PHPRestart/PHPRestartAction";
import PermissionResetAction from "Redux/V1/Sites/Operations/PermissionReset/PermissionResetAction";
// import CacheClearAction from "Redux/V1/Sites/Operations/CacheClear/CacheClearAction";
import CacheAllClearAction from "Redux/V1/Sites/Operations/CacheAllClear/CacheAllClearAction";
import SyncEnvironment from "Components/Staging/SyncEnvironmentComponent";
import OperationComponent from "Components/Sites/SiteOperation/OperationComponent";
import SiteDeleteComponent from "Components/Sites/SiteOperation/SiteDeleteComponent";
import {
    faSync,
    faKey,
    faBroom,
    faServer,
} from "@fortawesome/fontawesome-free-solid";
import { connect } from "react-redux";
import PermissionHelper from "Helpers/PermissionHelper";
import "Assets/css/Responsive/SiteDetailOperation.css";
import SiteDashboardMessageComponent from "Components/Sites/SiteDashboard/SiteDashboardMessageComponent";
import PushToLiveComponent from "Components/Staging/PushToLiveEnvComponent";
class SiteOperationComponent extends Component {
    componentWillMount = () => {
        // this.props.dispatch(
        //     SiteAction.getSiteDetail(this.props.match.params.host)
        // );
    };

    render() {
        const siteType = this.props.siteDetail.site_detail.site_type;
        const stagingDomain = this.props.siteDetail.site_detail.staging || {};
        const { identity, cloud_provider } =
            this.props.siteDetail.site_detail.container;
        const { parent } = this.props.siteDetail.site_detail;
        return (
            <React.Fragment>
                {" "}
                <SiteDashboardMessageComponent
                    siteDetail={this.props.siteDetail.site_detail}
                />
                <TemplateMain>
                    <SiteSubMenuComponent
                        identity={this.props.match.params.host}
                        active="operations"
                        iden={parent ? parent.identity : null}
                    />
                    <div className="site-operation-page">
                        <TemplateSideRight>
                            <div className="site-update-left">
                                {cloud_provider !== "PA" ? (
                                    <OperationComponent
                                        title="Restart PHP"
                                        description="Made any PHP changes?
                                    Encountering any PHP errors?
                                    Click here to safely restart PHP
                                    on your container."
                                        loading={this.props.phpRestart.loading}
                                        identity={identity}
                                        dis={this.props.dispatch}
                                        action={PhpRestartAction.phpRestart}
                                        icon={faSync}
                                    />
                                ) : null}
                                {/* Permission manager */}
                                {PermissionHelper.validate([
                                    "account_nerd_mode",
                                ]) ? (
                                    cloud_provider !== "PA" ? (
                                        <OperationComponent
                                            title="Restart Nginx"
                                            description="Click here to restart NGINX
                                    on your container."
                                            loading={
                                                this.props.nginxRestart.loading
                                            }
                                            identity={identity}
                                            dis={this.props.dispatch}
                                            action={
                                                NginxRestartAction.nginxRestart
                                            }
                                            icon={faServer}
                                        />
                                    ) : null
                                ) : null}
                                {cloud_provider !== "PA" ? (
                                    <OperationComponent
                                        title="Reset Permissions"
                                        description="Click here to Reset Permissions
                                    on your HTML folder to fix any
                                    permission errors."
                                        loading={
                                            this.props.permissionReset.loading
                                        }
                                        identity={identity}
                                        dis={this.props.dispatch}
                                        action={
                                            PermissionResetAction.permissionReset
                                        }
                                        icon={faKey}
                                    />
                                ) : null}
                                <OperationComponent
                                    title="Clear Cache"
                                    description="Changes not visible? Click here
                                    to quickly purge the cache on
                                    your container."
                                    loading={this.props.cacheAllClear.loading}
                                    identity={identity}
                                    dis={this.props.dispatch}
                                    action={CacheAllClearAction.cacheAllClear}
                                    icon={faBroom}
                                />
                                {cloud_provider === "GCP" ? (
                                    Object.keys(stagingDomain).length === 0 &&
                                    siteType === "live" ? (
                                        ""
                                    ) : (
                                        <SyncEnvironment
                                            dis={this.props.dispatch}
                                            sync={this.props.stagingSync}
                                            siteDetail={this.props.siteDetail}
                                        />
                                    )
                                ) : (
                                    ""
                                )}

                                {cloud_provider === "PA" &&
                                siteType === "staging" ? (
                                    <PushToLiveComponent
                                        dis={this.props.dispatch}
                                        sync={this.props.stagingSync}
                                        siteDetail={this.props.siteDetail}
                                    />
                                ) : (
                                    ""
                                )}

                                <SiteDeleteComponent
                                    dis={this.props.dispatch}
                                    siteDetail={this.props.siteDetail}
                                    deleteSite={this.props.siteDelete}
                                    siteDeleteCancel={
                                        this.props.siteDeleteCancel
                                    }
                                    stagingDelete={this.props.stagingDelete}
                                />
                            </div>
                            <div className="site-update-right d-none">
                                <div className="box overlay-grey">
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
        siteDetail: state.SiteDetailReducer,
        siteDelete: state.site.site.delete,
        siteDeleteCancel: state.site.site.deleteCancel,
        clearCache: state.clearCache,
        stagingDelete: state.staging.delete,
        stagingSync: state.staging.sync,
        phpRestart: state.site.operation.phpRestart,
        permissionReset: state.site.operation.permissionReset,
        cacheClear: state.site.operation.cacheClear,
        cacheAllClear: state.site.operation.cacheAllClear,
        nginxRestart: state.site.operation.nginxRestart,
    };
}
export default connect(mapStateToProps)(SiteOperationComponent);
