import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import SiteResourceActionV6 from "Redux/V6/Sites/Site/SiteResource/SiteResourceActionV6";

class SiteResourceComponentV6 extends Component {
    componentDidMount() {
        const host = this.props.host;
        this.props.dispatch(SiteResourceActionV6.siteResource(host));
    }
    render() {
        const resources = this.props.resources;
        return (
            <React.Fragment>
                <div
                    className={`progress-bar--container ${
                        Object.keys(resources).length !== 0 ? "" : "d-none"
                    }`}
                >
                    <div className="row mb-2">
                        <div className="col-12 d-flex align-items-center">
                            <div className="progress-bar--text">
                                <span className="dot"></span>
                                Storage
                            </div>
                            <div className="progress-bar--element">
                                <div class="bar positive">
                                    <span>
                                        <small>
                                            {resources.disk.used === null
                                                ? 0
                                                : resources.disk.used}
                                            MB
                                        </small>
                                        <small>2GB</small>
                                    </span>
                                </div>
                                <div
                                    class="bar negative"
                                    style={{
                                        width: `${
                                            resources.disk.used !== null
                                                ? 100 -
                                                  (resources.disk.used / 2048) *
                                                      100
                                                : 100
                                        }%`,
                                    }}
                                >
                                    <span>
                                        <small>
                                            {resources.disk.used !== null
                                                ? resources.disk.used
                                                : 0}
                                            MB
                                        </small>
                                        <small>2GB</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex align-items-center">
                            <div className="progress-bar--text">
                                <span className="dot red"></span>
                                Visitors
                            </div>
                            <div className="progress-bar--element">
                                <div class="bar positive">
                                    <span>
                                        <small>
                                            {resources.visitor.used !== null
                                                ? resources.visitor.used
                                                : 0}
                                        </small>
                                        <small>20000</small>
                                    </span>
                                </div>
                                <div
                                    class="bar negative"
                                    style={{
                                        width: `${
                                            resources.visitor.used !== null
                                                ? 100 -
                                                  (resources.visitor.used /
                                                      20000) *
                                                      100
                                                : 100
                                        }%`,
                                    }}
                                >
                                    <span>
                                        <small>
                                            {resources.visitor.used !== null
                                                ? resources.visitor.used
                                                : 0}
                                        </small>
                                        <small>20000</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        resources: store.siteV6.siteV6.resource.resources,
    };
}

export default connect(mapStateToProps)(SiteResourceComponentV6);
