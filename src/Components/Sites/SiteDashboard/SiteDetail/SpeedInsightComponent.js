import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SpeedBeforeComponent from "Components/AvgSpeeds/SpeedBeforeComponent";
import SpeedAfterComponent from "Components/AvgSpeeds/SpeedAfterComponent";
import TemplateFull from "Templates/TemplateFull";
import RoundUpHelper from "Helpers/RoundUpHelper";
import "Assets/css/sitedetail.css";
import NitroEnableAction from "Redux/V1/Sites/Addons/Nitro/NitroEnable/NitroEnableAction";
import Confirm from "Helpers/ConfirmationHelper";
import TimeStampHelper from "Helpers/TimeStampHelper";
import "Assets/css/Responsive/SiteDetailDashboard.css";
import Configs from "Configs";
import ToolTipComponent from "Components/UI/ToolTipComponent";
import RetestPageSpeedAction from "Redux/V1/Sites/Features/RetestPageSpeed/RetestPageSpeedAction";
import ErrorBusiness from "Businesses/ErrorBusiness";
import "Assets/css/Responsive/SiteDetailDashboard.css";

class SpeedInsightComponent extends Component {
    nitroEnable = () => {
        if (this.props.mobileSpeed.after_score !== undefined) {
            this.props.dis(NitroEnableAction.nitroEnable(this.props.identity));
        } else {
            Confirm(
                this.props.dis,
                NitroEnableAction.nitroEnable(this.props.identity),
                `Please note that Bionic speed is a paid add on ($9 per month) and would be billed monthly. <br><div class="note-text">Note: If you are using free site, you will not be charged</div>`
            );
        }
    };
    retestPageSpeedFunction = (identity) => {
        this.props.dis(
            RetestPageSpeedAction.retestPageSpeed(this.props.identity)
        );
    };
    render() {
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        const { mobileSpeed, desktopSpeed, dashboard, googlePageSpeed } =
            this.props;
        let { nitroEnable, reTestHide } = this.props;
        ErrorBusiness.errorBoundary([desktopSpeed]);
        return (
            <React.Fragment>
                <div id="page-speed" className="average-speed-main">
                    <div className="page-header">Avg. Speed Insights</div>

                    <div
                        // className={`box ${
                        //     desktopSpeed.before_score &&
                        //     mobileSpeed.before_score
                        //         ? ""
                        //         : "overlay-grey"
                        // }`}
                        className={!desktopSpeed.before_score && !mobileSpeed.before_score
                            ? (!portal_settings.name ? "box overlay-grey" : "box grey-overlay")
                            : "box"
                    }
                    >
                        <div>
                            <Row>
                                <Col sm={12}></Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={12}>
                                            <div className="speed-title">
                                                {" "}
                                                PageSpeed - Desktop
                                                {/* <FontAwesomeIcon
                                                    icon={faDesktop}
                                                /> */}
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <SpeedBeforeComponent
                                                title="Before"
                                                number={
                                                    desktopSpeed.before_score
                                                        ? RoundUpHelper.roundup(
                                                              desktopSpeed.before_score
                                                          )
                                                        : 0.0
                                                }
                                            />
                                        </Col>

                                        <div className="speed-image">
                                            {portal_settings?.name ? null :<img
                                                src="../assets/img/Brands/bolt.gif"
                                                alt="speed"
                                            />}
                                        </div>

                                        <Col sm={6}>
                                            <SpeedAfterComponent
                                                title="After"
                                                className={
                                                    desktopSpeed.after_score
                                                        ? ""
                                                        : "overlay-disable"
                                                }
                                                number={
                                                    desktopSpeed.after_score
                                                        ? RoundUpHelper.roundup(
                                                              desktopSpeed.after_score
                                                          )
                                                        : 0.0
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={12}>
                                            <div className="speed-title w-100">
                                                PageSpeed - Mobile
                                                {/* <FontAwesomeIcon
                                                    icon={faMobileAlt}
                                                /> */}
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <SpeedBeforeComponent
                                                title="Before"
                                                number={
                                                    mobileSpeed.before_score
                                                        ? RoundUpHelper.roundup(
                                                              mobileSpeed.before_score
                                                          )
                                                        : 0.0
                                                }
                                            />
                                        </Col>

                                        <div className="speed-image">
                                        {portal_settings?.name ? null :<img
                                                src="../assets/img/Brands/bolt.gif"
                                                alt="speed"
                                            />}
                                        </div>

                                        <Col sm={6}>
                                            <SpeedAfterComponent
                                                title="After"
                                                className={
                                                    mobileSpeed.after_score
                                                        ? ""
                                                        : "overlay-disable"
                                                }
                                                number={
                                                    mobileSpeed.after_score
                                                        ? RoundUpHelper.roundup(
                                                              mobileSpeed.after_score
                                                          )
                                                        : 0.0
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        {/* <hr /> */}
                        <div>
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={12}>
                                            <div className="speed-title mt-4">
                                                Load Time - Desktop
                                                {/* <FontAwesomeIcon
                                                    icon={faDesktop}
                                                /> */}
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <SpeedBeforeComponent
                                                title="Before"
                                                number={
                                                    desktopSpeed.before_load_time
                                                        ? RoundUpHelper.onedecimalplace(
                                                              desktopSpeed.before_load_time
                                                          )
                                                        : 0.0
                                                }
                                                second="s"
                                            />
                                        </Col>
                                        <div className="speed-image">
                                        {portal_settings?.name ? null :<img
                                                src="../assets/img/Brands/bolt.gif"
                                                alt="speed"
                                            />}
                                        </div>
                                        <Col sm={6}>
                                            <SpeedAfterComponent
                                                title="After"
                                                className={
                                                    desktopSpeed.after_load_time
                                                        ? ""
                                                        : "overlay-disable"
                                                }
                                                number={
                                                    desktopSpeed.after_load_time
                                                        ? RoundUpHelper.onedecimalplace(
                                                              desktopSpeed.after_load_time
                                                          )
                                                        : 0.0
                                                }
                                                second="s"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={12}>
                                            <div className="speed-title mt-4">
                                                Load Time - Mobile
                                                {/* <FontAwesomeIcon
                                                        icon={faMobileAlt}
                                                    /> */}
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <SpeedBeforeComponent
                                                title="Before"
                                                number={
                                                    mobileSpeed.before_load_time
                                                        ? RoundUpHelper.onedecimalplace(
                                                              mobileSpeed.before_load_time
                                                          )
                                                        : 0.0
                                                }
                                                second="s"
                                            />
                                        </Col>
                                        <div className="speed-image">
                                        {portal_settings?.name ? null :<img
                                                src="../assets/img/Brands/bolt.gif"
                                                alt="speed"
                                            />}
                                        </div>
                                        <Col sm={6}>
                                            <SpeedAfterComponent
                                                title="After"
                                                className={
                                                    mobileSpeed.after_load_time
                                                        ? ""
                                                        : "overlay-disable"
                                                }
                                                number={
                                                    mobileSpeed.after_load_time
                                                        ? RoundUpHelper.onedecimalplace(
                                                              mobileSpeed.after_load_time
                                                          )
                                                        : 0.0
                                                }
                                                second="s"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>

                        <TemplateFull>
                            <Row className="mt-3 no-gutters enable-bionic-button ">
                                <Col lg={7} md={7}>
                                    {mobileSpeed.after_score && !dashboard ? (
                                        ""
                                    ) : !dashboard ? (
                                        <button
                                            className={`btn btn-outline-primary enable-bionic bionic-btn-outline ${
                                                nitroEnable.loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                            onClick={this.nitroEnable}
                                        >
                                            Enable Bionic Speed to check speed
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                                <Col lg={4} md={4}>
                                    {!dashboard ? (
                                        <p className="">
                                            <small>
                                                {desktopSpeed.updated_at
                                                    ? `Last update: ${TimeStampHelper.standardDateFormat(
                                                          desktopSpeed.updated_at
                                                      )}`
                                                    : ""}
                                            </small>
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                                <Col lg={1} md={1}>
                                    {reTestHide ? (
                                        Object.keys(googlePageSpeed.desktop)
                                            .length === 0 &&
                                        Object.keys(googlePageSpeed.mobile)
                                            .length === 0 ? (
                                            ""
                                        ) : (
                                            <ToolTipComponent
                                                containerClasses="speed-retest-icon"
                                                src={`${Configs.public_url}/assets/img/General/refresh.svg`}
                                                text="Refresh Your Google PageSpeed Scores"
                                                onClick={() =>
                                                    this.retestPageSpeedFunction(
                                                        this.props.identity
                                                    )
                                                }
                                            />
                                        )
                                    ) : null}
                                </Col>
                            </Row>
                        </TemplateFull>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SpeedInsightComponent;
