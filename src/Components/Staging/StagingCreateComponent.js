import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import StagingEnvironment from "Components/Staging/StagingEnvironmentComponent";
import StagingCreateAction from "Redux/V1/Staging/Post/StagingPostAction";
import "Assets/css/staging.css";
import "Assets/css/Responsive/SiteDetailDashboard.css";
import Messages from "Languages/En.lang";

class StagingCreate extends Component {
    stagingCreateFunction = () => {
        this.props.dis(StagingCreateAction.stagingPost(this.props.identity));
    };
    render() {
        const { loading } = this.props.stagingCreateResponse;
        const stagingDomain = this.props.siteDetail.staging || {};
        const siteType = this.props.siteDetail.site_type;
        return (
            <Row>
                <Col md={12}>
                    <div class="page-header">Staging</div>
                    <section className="box ">
                        <div
                            // class condition set for live and staging environment
                            className={
                                siteType === "live"
                                    ? "on-live-environment"
                                    : "on-staging-environment"
                            }
                        >
                            {Object.keys(stagingDomain).length === 0 &&
                            siteType === "live" ? (
                                <React.Fragment>
                                    <h4 className="page-header m-0 pr-1">
                                        {Messages.site_dashboard.staging.text}
                                    </h4>
                                    <Button
                                        className={`btn bionic-btn mt-2 font-bold ${
                                            loading ? "loading" : ""
                                        }`}
                                        onClick={this.stagingCreateFunction}
                                    >
                                        Create Staging
                                    </Button>
                                </React.Fragment>
                            ) : siteType !== "staging" &&
                              stagingDomain.status !== "active" ? (
                                <h4 className="page-header ">
                                    {
                                        Messages.site_dashboard
                                            .staging_inprogress.text
                                    }
                                    <br />
                                    <br />
                                    Please wait.
                                </h4>
                            ) : (
                                <React.Fragment>
                                    <React.Fragment>
                                        <h4
                                            className={`page-header ${
                                                siteType === "live"
                                                    ? "change-env-text"
                                                    : ""
                                            }`}
                                        >
                                            Change environment of your site.
                                        </h4>

                                        <StagingEnvironment
                                            siteDetail={this.props.siteDetail}
                                        />
                                    </React.Fragment>
                                </React.Fragment>
                            )}
                        </div>
                    </section>
                </Col>
            </Row>
        );
    }
}

export default StagingCreate;
