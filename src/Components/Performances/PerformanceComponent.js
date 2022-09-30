import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TemplateThreeCols from "Templates/TemplateThreeColumns";
import TemplateFull from "Templates/TemplateFull";
import DashboardPerformanceComponent from "../Dashboards/Ui/PerformanceComponent";
import Configs from "Configs";
import ErrorBusiness from "Businesses/ErrorBusiness";

class PerformanceComponent extends Component {
    render() {
        const { update, update_monthly } = this.props;
        ErrorBusiness.errorBoundary([update, update_monthly]);
        return (
            <React.Fragment>
                <TemplateFull colClassName="p-0">
                    <div className="page-header performance-management-title  ">
                        Performance Management
                    </div>
                    <div className="performance-date d-none"></div>
                </TemplateFull>

                <div className="performance-main">
                    <div className="box">
                        <div className="performance">
                            <Row>
                                <Col sm={12}>
                                    <div className="performance-title">
                                        Update last month:{" "}
                                        <font>
                                            {update_monthly
                                                ? update_monthly.core +
                                                      update_monthly.themes +
                                                      update_monthly.plugins ||
                                                  0
                                                : 0}
                                        </font>{" "}
                                    </div>
                                </Col>
                                <TemplateThreeCols>
                                    <DashboardPerformanceComponent
                                        title="Wordpress"
                                        image={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                        number={
                                            update_monthly
                                                ? update_monthly.core || 0
                                                : 0
                                        }
                                        redirect="/updates?type=core"
                                        className="wp-icon"
                                    />
                                    <DashboardPerformanceComponent
                                        title="Themes"
                                        image={`${Configs.public_url}/assets/img/WordPress/wp-theme.svg`}
                                        number={
                                            update_monthly
                                                ? update_monthly.themes || 0
                                                : 0
                                        }
                                        redirect="/updates?type=theme"
                                        className="wp-theme"
                                    />
                                    <DashboardPerformanceComponent
                                        title="Plugins"
                                        image={`${Configs.public_url}/assets/img/WordPress/wp-plugin.svg`}
                                        number={
                                            update_monthly
                                                ? update_monthly.plugins || 0
                                                : 0
                                        }
                                        redirect="/updates?type=plugin"
                                        className="wp-plugin"
                                    />
                                </TemplateThreeCols>
                            </Row>
                        </div>
                        <hr />
                        <div className="performance ">
                            <Row>
                                <Col sm={12}>
                                    <div className="performance-title">
                                        Total updates needing attention:{" "}
                                        <a
                                            className="performance-count bionic-link bionic-bold"
                                            href="/updates"
                                        >
                                            {update
                                                ? update.core +
                                                      update.themes +
                                                      update.plugins || 0
                                                : 0}
                                        </a>
                                    </div>
                                </Col>
                                <TemplateThreeCols>
                                    <DashboardPerformanceComponent
                                        title="Wordpress"
                                        image={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                        number={update ? update.core || 0 : 0}
                                        redirect="/updates?type=core"
                                        className="wp-icon"
                                    />
                                    <DashboardPerformanceComponent
                                        title="Themes"
                                        image={`${Configs.public_url}/assets/img/WordPress/wp-theme.svg`}
                                        number={update ? update.themes || 0 : 0}
                                        redirect="/updates?type=theme"
                                        className="wp-theme"
                                    />
                                    <DashboardPerformanceComponent
                                        title="Plugins"
                                        image={`${Configs.public_url}/assets/img/WordPress/wp-plugin.svg`}
                                        number={
                                            update ? update.plugins || 0 : 0
                                        }
                                        redirect="/updates?type=plugin"
                                        className="wp-plugin"
                                    />
                                </TemplateThreeCols>
                            </Row>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default PerformanceComponent;
