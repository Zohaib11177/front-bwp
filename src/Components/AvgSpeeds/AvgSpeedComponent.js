import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SpeedBeforeComponent from "./SpeedBeforeComponent";
import SpeedAfterComponent from "./SpeedAfterComponent";
import RoundUpHelper from "Helpers/RoundUpHelper";
import Configs from "Configs";
// import { Link } from "react-router-dom";

class AvgSpeedComponent extends Component {
    render() {
        const { avgSpeed } = this.props;
        return (
            <React.Fragment>
                <div className="avg-speed">
                    <div className="page-header refresh-icon-avg">
                        Avg. Speed Insights{" "}
                        {/* <Link
							data-toggle="tooltip"
							data-placement="top"
							title="Refresh"
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="#1665d8"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
								></path>
							</svg>{" "}
						</Link> */}
                    </div>

                    <div className="box">
                        <div className="speed">
                            <Row>
                                <Col sm={12}>
                                    <div className="speed-title">
                                        Page Speed
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <SpeedBeforeComponent
                                        title="Before"
                                        number={
                                            avgSpeed.page_speed_score
                                                ? RoundUpHelper.roundup(
                                                      avgSpeed.page_speed_score
                                                          .value
                                                  )
                                                : 0
                                        }
                                        class={
                                            avgSpeed.page_speed_score
                                                ? avgSpeed.page_speed_score
                                                      .color
                                                : null
                                        }
                                    />
                                </Col>

                                <div className="speed-image">
                                    <img
                                        src={`${Configs.public_url}/assets/img/speed-icon.svg`}
                                        alt="speed"
                                    />
                                </div>

                                <Col sm={6}>
                                    <SpeedAfterComponent
                                        title="After"
                                        number={
                                            avgSpeed.speed_score_prediction
                                                ? RoundUpHelper.roundup(
                                                      avgSpeed
                                                          .speed_score_prediction
                                                          .value
                                                  )
                                                : 0
                                        }
                                        class={
                                            avgSpeed.speed_score_prediction
                                                ? avgSpeed
                                                      .speed_score_prediction
                                                      .color
                                                : null
                                        }
                                    />
                                </Col>
                            </Row>
                        </div>

                        <hr />
                        <div className="speed">
                            <Row>
                                <Col sm={12}>
                                    <div className="speed-title">Load Time</div>
                                </Col>
                                <Col sm={6}>
                                    <SpeedBeforeComponent
                                        title="Before"
                                        number={
                                            avgSpeed.fully_loaded_time
                                                ? avgSpeed.fully_loaded_time
                                                      .value
                                                : 0
                                        }
                                        second="s"
                                        class={
                                            avgSpeed.fully_loaded_time
                                                ? avgSpeed.fully_loaded_time
                                                      .color
                                                : null
                                        }
                                    />
                                </Col>
                                <div className="speed-image">
                                    <img
                                        src={`${Configs.public_url}/assets/img/speed-icon.svg`}
                                        alt=""
                                    />
                                </div>
                                <Col sm={6}>
                                    <SpeedAfterComponent
                                        title="After"
                                        number={
                                            avgSpeed.loaded_time_prediction
                                                ? avgSpeed
                                                      .loaded_time_prediction
                                                      .value
                                                : 0
                                        }
                                        second="s"
                                        class={
                                            avgSpeed.loaded_time_prediction
                                                ? avgSpeed
                                                      .loaded_time_prediction
                                                      .color
                                                : null
                                        }
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AvgSpeedComponent;
