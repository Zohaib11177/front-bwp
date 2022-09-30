import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Confirmation from "Helpers/ConfirmationHelper";
import SyncPushActionV6 from "Redux/V6/Staging/SyncPushEnv/SyncPushActionV6";

class PushtoLiveComponentV6 extends Component {
    syncEnvironmentFunction = (identity) => {
        Confirmation(
            this.props.dispatch,
            SyncPushActionV6.syncPushPut(identity),
            "Do you really want push to this environment. previous data will be overwritten ?"
        );
    };
    render() {
        const parent = this.props.parent;
        return (
            <React.Fragment>
                {parent.status ? (
                    <div className="col-md-6">
                        <div className="card-blue mb-4 card-sm-adj">
                            <div className="card-blue--header">
                                <span>Push To Live</span>
                            </div>
                            <div className="card-blue--content">
                                <div className="text-btn--wrap">
                                    <div className="text-col">
                                        <span className="font-14 light-txt-color  f-adj">
                                            <strong>Note: </strong>
                                            Push to live if you want to sync
                                            your live site with your staging
                                            site. All data gets overwritten. If
                                            in doubt, contact support.
                                        </span>
                                    </div>
                                    <div className="btn-col">
                                        <React.Fragment>
                                            <Button
                                                onClick={(e) =>
                                                    this.syncEnvironmentFunction(
                                                        this.props.host
                                                    )
                                                }
                                                className={`btn btn-primary btn-bionic w-btn w-adj px-4 btn btn-primary ${
                                                    this.props.push_staging
                                                        .loading
                                                        ? "loading"
                                                        : ""
                                                }`}
                                            >
                                                Push Live
                                            </Button>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}

function mapStateToProps(store) {
    return {
        parent: store.siteV6.siteV6.detail.parent,
        push_staging: store.stagingV6.syncPush,
    };
}

export default connect(mapStateToProps)(PushtoLiveComponentV6);
