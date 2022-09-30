import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'Assets/css/dashboard.css';
import TemplateSideLeft from 'Templates/TemplateSidebarLeft';
import TemplateThreeColumns from 'Templates/TemplateThreeColumns';
import TemplateFull from 'Templates/TemplateFull';
import TemplateMain from 'Templates/TemplateMain';
// import TemplateSideRight from 'Templates/TemplateSidebarRight';
import ResourceComponent from 'Components/Resources/ResourceComponent';
import AccountComponent from 'Components/Accounts/AccountComponent';
import PerformanceComponent from 'Components/Performances/PerformanceComponent';
// import AddonComponent from "Components/Addons/AddonComponent";
// import ChangeLogComponent from 'Components/ChangeLogs/ChangeLogComponent';
import DashboardTotalComponent from './Ui/TotalComponent';
import { connect } from 'react-redux';
import DashboardAction from 'Redux/V1/Dashboard/DashboardAction';
import Configs from 'Configs';
// import StandardFormatHelper from "Helpers/StandardFormatHelper";
import SpeedInsightComponent from 'Components/Sites/SiteDashboard/SiteDetail/SpeedInsightComponent';
import 'Assets/css/Responsive/Dashboard.css';
// import LoadingComponent from "Components/UI/LoadingComponent";
import ErrorBoundaryComponent from 'Components/UI/ErrorBoundaryComponent';
import AlertListActionV3 from 'Redux/V3/SystemAlerts/Get/AlertGetActionV3';

class Dashboard extends Component {
    componentDidMount() {
        this.props.dispatch(DashboardAction.getDashboard());
        this.props.dispatch(AlertListActionV3.alertGet());
    }
    render() {
        const { user } = this.props;
        const {
            site_summary,
            update,
            update_monthly,
            resources,
            billing,
            google_page_speed,
        } = this.props.Dashboard.response || {};
        const { mobile, desktop } = google_page_speed || {};

        // if (!site_summary) {
        //     throw new Error("check");
        // }
        // const { Dashboard } = this.props;

        /* Condition to hide main component if loading true or api success false */
        // const hide = Dashboard.loading || !Dashboard.success;

        return (
            <React.Fragment>
                <TemplateMain>
                    {/* <LoadingComponent data={Dashboard} />
                    {hide ? (
                        ""z
                    ) : (    ) : ( */}
                    <Container className="main-wrapper">
                        <TemplateSideLeft>
                            <ErrorBoundaryComponent>
                                <AccountComponent user={user} />
                            </ErrorBoundaryComponent>
                            <ErrorBoundaryComponent>
                                <ResourceComponent
                                    resources={resources}
                                    billing={billing}
                                />
                            </ErrorBoundaryComponent>
                        </TemplateSideLeft>

                        <TemplateFull>
                            <div className="page-header">Website's Info</div>
                        </TemplateFull>
                        <div className="total-main">
                            <TemplateThreeColumns>
                                <ErrorBoundaryComponent>
                                    <DashboardTotalComponent
                                        title="Total Sites"
                                        image={`${Configs.public_url}/assets/img/MainDashBoardIcons/browser-com.svg`}
                                        link="../sites"
                                        number={site_summary?.total}
                                    />
                                </ErrorBoundaryComponent>
                                <ErrorBoundaryComponent>
                                    <DashboardTotalComponent
                                        title="Live Sites"
                                        image={`${Configs.public_url}/assets/img/MainDashBoardIcons/network-signal.svg`}
                                        link="../sites"
                                        number={site_summary?.live}
                                    />
                                </ErrorBoundaryComponent>
                                <ErrorBoundaryComponent>
                                    <DashboardTotalComponent
                                        title="Staging Sites"
                                        image={`${Configs.public_url}/assets/img/MainDashBoardIcons/layout-dashboard.svg`}
                                        link="../sites"
                                        number={site_summary?.staging}
                                    />
                                </ErrorBoundaryComponent>
                            </TemplateThreeColumns>
                        </div>

                        <TemplateFull>
                            <React.Fragment>
                                <ErrorBoundaryComponent>
                                    <PerformanceComponent
                                        update={update}
                                        update_monthly={update_monthly}
                                    />{' '}
                                </ErrorBoundaryComponent>
                                <ErrorBoundaryComponent>
                                    <SpeedInsightComponent
                                        mobileSpeed={mobile}
                                        desktopSpeed={desktop}
                                        dashboard={true}
                                        nitroEnable={this.props.nitroEnable}
                                        googlePageSpeed={google_page_speed}
                                        reTestHide={false}
                                    />
                                </ErrorBoundaryComponent>
                            </React.Fragment>
                        </TemplateFull>
                        <TemplateFull>{/* <AddonComponent /> */}</TemplateFull>
                    </Container>
                    {/* )} */}
                </TemplateMain>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        Dashboard: state.DashboardReducer,
        nitroEnable: state.nitroEnable,
    };
}
export default connect(mapStateToProps)(Dashboard);
