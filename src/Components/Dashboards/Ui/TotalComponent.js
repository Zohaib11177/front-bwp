import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import ErrorBusiness from "Businesses/ErrorBusiness";
class DashboardTotalComponent extends Component {
    render() {
        ErrorBusiness.errorBoundary([this.props.number]);
        return (
            <div className={`box ${this.props.className}`}>
                <a href={this.props.link} className="total-box bionic-link">
                    {this.props.title}
                    <span className={`${this.props.numberClassName}`}>
                        <ReactSVG
                            src={this.props.image}
                            alt="image"
                            className={`svg-image ${this.props.iconClassName}`}
                            onClick={this.props.iconFunction}
                        />
                        {this.props.number}
                        <sub className="gb-text"> {this.props.text}</sub>{" "}
                    </span>
                </a>
            </div>
        );
    }
}
export default DashboardTotalComponent;
