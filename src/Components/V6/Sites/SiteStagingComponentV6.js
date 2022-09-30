import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import StagingCreateActionV6 from "Redux/V6/Staging/Post/StagingPostActionV6";

class SiteStagingComponentV6 extends Component {
    stagingCreateFunction = (host) => {
        this.props.dispatch(StagingCreateActionV6.stagingPost(host));
    };
    render() {
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card-blue mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>Create Staging Site</span>
                        </div>
                        <div className="card-blue--content">
                            <div className="text-btn--wrap">
                                <div className="text-col">
                                    <span className="font-14 light-txt-color f-adj">
                                        <strong>Note: </strong>
                                        Changing something on live site isn't a
                                        great idea, please create staging site
                                        and play with your change. It helps to
                                        avoid unneccassry down time on live
                                        site.
                                    </span>
                                </div>
                                <div className="btn-col">
                                    <React.Fragment>
                                        <Button
                                            onClick={(e) =>
                                                this.stagingCreateFunction(
                                                    this.props.host
                                                )
                                            }
                                            className={`btn btn-primary btn-bionic w-btn w-adj px-4 btn btn-primary ${
                                                this.props.create_staging
                                                    .loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                        >
                                            Create Staging
                                        </Button>
                                    </React.Fragment>
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
        create_staging: store.stagingV6.create,
    };
}

export default connect(mapStateToProps)(SiteStagingComponentV6);
