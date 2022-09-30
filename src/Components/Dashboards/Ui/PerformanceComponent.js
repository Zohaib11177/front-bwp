import React, { Component } from "react";
import { ReactSVG } from "react-svg";
// import { Link } from "react-router-dom";
import "Assets/css/Responsive/SiteDetailDashboard.css";
class DashboardPerformanceComponent extends Component {
    render() {
        return (
            <div className="box pull-left">
                {/* <Link to={this.props.redirect} className="decoration-none"> */}
                <div className="site-management-main">
                    <a
                        href={this.props.redirect}
                        className="performance-box decoration-none"
                    >
                        <div className="performance-image">
                            <ReactSVG
                                src={this.props.image}
                                alt=""
                                className={this.props.className}
                            />
                        </div>
                        <div className="performance-box-content">
                            {this.props.title ? (
                                <p className="text-dark decoration-none ">
                                    {this.props.title}
                                </p>
                            ) : (
                                ""
                            )}
                            <span>{this.props.number}</span>
                        </div>
                    </a>
                </div>
                {/* </Link> */}
            </div>
        );
    }
}
export default DashboardPerformanceComponent;
