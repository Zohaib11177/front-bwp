import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";
import ReactApexChart from "react-apexcharts";
import "Assets/css/Responsive/Dashboard.css";
import ErrorBusiness from "Businesses/ErrorBusiness";

class ResourceComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 390,
                    type: "radialBar",
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,

                        hollow: {
                            margin: 20,
                            size: "-15%",
                            background: "transparent",
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            },
                        },
                    },
                },
                colors: ["#ed8845", "#5332ed", "#4aa2ff", "#34d4d9"],
                labels: ["RESETS", "BANDWIDTH", "VISITS", "DISK"],
                legend: {
                    show: false,
                    floating: true,
                    fontSize: "16px",
                    position: "left",
                    offsetX: 200,
                    offsetY: 25,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0,
                    },
                    formatter: function (seriesName, opts) {
                        return (
                            seriesName +
                            ":  " +
                            opts.w.globals.series[opts.seriesIndex]
                        );
                    },
                    itemMargin: {
                        vertical: 6,
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                show: false,
                            },
                        },
                    },
                ],
            },
        };
    }

    calculateResources = (resources, billing) => {
        let resets = [];
        let bandwith = [];
        let disk = [];
        let visitor = [];
        resets.used =
            TimeStampHelper.differenceInDays(
                Date.now(),
                billing.billing_next_date
            ) || 0;
        resets.allocation = 31;
        bandwith.used = resources.bandwith ? resources.bandwith.used : 0;
        bandwith.allocation = resources.bandwith
            ? resources.bandwith.allocation
            : 0;
        visitor.used = resources.visitor ? resources.visitor.used : 0;
        visitor.allocation = resources.visitor
            ? resources.visitor.allocation
            : 0;
        disk.used = resources.disk ? resources.disk.used : 0;
        disk.allocation = resources.disk ? resources.disk.allocation : 0;

        let series = [];
        series.push(Math.abs(resets.used / resets.allocation - 1) * 100);
        series.push((bandwith.used / bandwith.allocation) * 100);
        series.push((visitor.used / visitor.allocation) * 100);
        series.push((disk.used / disk.allocation) * 100);
        series.push(0);

        return series;
    };

    render() {
        const { resources, billing } = this.props;
        ErrorBusiness.errorBoundary([resources, billing]);
        return (
            <React.Fragment>
                <div className="page-header">Resource Usage</div>
                <section className="box resource">
                    <Row>
                        <Col sm={4} className="chart-column-responsive">
                            {/* <img src="assets/img/Dashboard.png" alt="" /> */}
                            <div id="chart">
                                <ReactApexChart
                                    options={this.state.options}
                                    series={this.calculateResources(
                                        resources,
                                        billing
                                    )}
                                    type="radialBar"
                                    height={260}
                                />
                            </div>
                        </Col>
                        <Col sm={4} className="mt-2 column-responsive-res1">
                            <div className="resourcelist res1">
                                <span className="resource-circle"></span>Next
                                Billing in
                                <span>
                                    {billing.billing_next_date === null ||
                                    TimeStampHelper.differenceInDays(
                                        Date.now(),
                                        billing.billing_next_date
                                    ) < 0
                                        ? 0
                                        : TimeStampHelper.differenceInDays(
                                              Date.now(),
                                              billing.billing_next_date
                                          )}{" "}
                                    DAYS
                                </span>
                            </div>
                            <div className="resourcelist res2">
                                <span className="resource-circle"></span>DISK
                                <span>
                                    {resources.disk
                                        ? (resources.disk.used / 1024).toFixed(
                                              2
                                          )
                                        : 0}{" "}
                                    GB/
                                    {resources.disk
                                        ? (
                                              resources.disk.allocation / 1024
                                          ).toFixed(2)
                                        : 0}{" "}
                                    GB
                                </span>
                            </div>
                        </Col>
                        <Col sm={4} className="mt-2 column-responsive-res3">
                            <div className="resourcelist res3">
                                <span className="resource-circle"></span>{" "}
                                BANDWIDTH
                                <span>
                                    {resources.bandwith
                                        ? (
                                              resources.bandwith.used / 1024
                                          ).toFixed(2)
                                        : 0}{" "}
                                    GB/
                                    {resources.bandwith
                                        ? (
                                              resources.bandwith.allocation /
                                              1024
                                          ).toFixed(2)
                                        : 0}{" "}
                                    GB
                                </span>
                            </div>
                            <div className="resourcelist res4">
                                <span className="resource-circle"></span> VISITs
                                <span>
                                    {resources.visitor
                                        ? resources.visitor.used
                                        : 0}
                                    /
                                    {resources.visitor
                                        ? resources.visitor.allocation
                                        : 0}
                                </span>
                            </div>
                        </Col>
                    </Row>
                </section>
            </React.Fragment>
        );
    }
}
export default ResourceComponent;
