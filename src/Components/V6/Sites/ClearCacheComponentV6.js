import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import CacheAllClearActionV6 from "Redux/V6/Sites/Operations/CacheAllClear/CacheAllClearActionV6";
class ClearCacheComponentV6 extends Component {
    clearCache = (host) => {
        this.props.dispatch(CacheAllClearActionV6.cacheAllClear(host));
    };
    render() {
        const host = this.props.host;
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card-blue mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>Clear Cache</span>
                        </div>
                        <div className="card-blue--content">
                            <div className="text-btn--wrap">
                                <div className="text-col">
                                    <span className="font-14 light-txt-color f-adj">
                                        <strong>Note: </strong>
                                        Changes not visible? <br></br>
                                        Click here to quickly purge the cache on
                                        your container.
                                        <br></br>
                                        Changes will take couple of seconds.
                                    </span>
                                </div>
                                <div className="btn-col">
                                    <React.Fragment>
                                        <Button
                                            className={`btn btn-primary btn-bionic w-btn w-adj px-4 ${
                                                this.props.clear_cache.loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                            onClick={(e) =>
                                                this.clearCache(host)
                                            }
                                        >
                                            Clear Cache
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
        clear_cache: store.siteV6.operationV6.cacheAllClear,
    };
}

export default connect(mapStateToProps)(ClearCacheComponentV6);
