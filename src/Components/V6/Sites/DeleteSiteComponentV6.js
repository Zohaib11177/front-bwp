import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import TimeStampHelper from "Helpers/TimeStampHelper";
import SiteDeleteActionV6 from "Redux/V6/Sites/Site/SiteDelete/SiteDeleteActionV6";
import SiteCancelDeleteActionV6 from "Redux/V6/Sites/Site/SiteCancelDelete/SiteCancelDeleteActionV6";
import SiteInstantDeleteActionV6 from "Redux/V6/Sites/Site/SiteInstantDelete/SiteInstantDeleteActionV6";
import Confirmation from "Helpers/ConfirmationHelper";

class DeleteSiteComponentV6 extends Component {
    stagingDelete = (host) => {
        const data = {
            host: host,
            primary_domain: this.props.site_detail_v6.parent.domain_name,
        };
        Confirmation(
            this.props.dispatch,
            SiteInstantDeleteActionV6.siteInstantDelete(data),
            "Site will be deleted Instantly"
        );
    };
    deleteCancelReq = (host) => {
        Confirmation(
            this.props.dispatch,
            SiteCancelDeleteActionV6.siteCancelDelete(host),
            "Site will not be deleted anymore"
        );
    };
    deleteSite = (host) => {
        Confirmation(
            this.props.dispatch,
            SiteDeleteActionV6.siteDelete(host),
            "Site will be deleted on billing date"
        );
    };
    render() {
        const host = this.props.host;
        const parent = this.props.site_detail_v6.parent;
        const container = this.props.site_detail_v6.container;
        return (
            <React.Fragment>
                {" "}
                <div className="col-md-6">
                    <div className="card-blue mb-4 card-sm-adj">
                        <div className="card-blue--header">
                            <span>Delete Site</span>
                        </div>
                        <div className="card-blue--content">
                            <div className="text-btn--wrap">
                                <div className="text-col">
                                    <span className="font-14 light-txt-color  f-adj">
                                        <strong>Note: </strong>
                                        {Object.keys(parent).length !== 0 ? (
                                            <>
                                                Please note this operation is
                                                irreversible and all data would
                                                be deleted immediately.
                                            </>
                                        ) : (
                                            <>
                                                Click here to request your site
                                                for deletion. Please note this
                                                operation is irreversible and
                                                all data would be deleted on
                                                coming 4th.
                                            </>
                                        )}
                                    </span>
                                </div>
                                <div className="btn-col">
                                    {container.destroy_at ? (
                                        <React.Fragment>
                                            <Button
                                                className={`btn btn-bionic w-btn w-adj mt-4 pl-3 pr-3 ${
                                                    this.props.delete_cancel
                                                        .loading
                                                        ? "loading"
                                                        : ""
                                                }`}
                                                onClick={(e) =>
                                                    this.deleteCancelReq(host)
                                                }
                                            >
                                                Cancel Delete
                                            </Button>
                                            <p className="text-danger font-14 mt-1">
                                                {"Deletion Date: " +
                                                    TimeStampHelper.standardDateFormat(
                                                        container.destroy_at
                                                    )}
                                            </p>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            {Object.keys(parent).length !==
                                            0 ? (
                                                <Button
                                                    className={`mt-4 bg-delete btn-bionic w-btn w-adj px-4 ${
                                                        this.props
                                                            .delete_instant
                                                            .loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    onClick={(e) =>
                                                        this.stagingDelete(host)
                                                    }
                                                >
                                                    Delete Staging
                                                </Button>
                                            ) : (
                                                <Button
                                                    className={`mt-4 bg-delete btn-bionic w-btn w-adj px-4 ${
                                                        this.props.delete
                                                            .loading
                                                            ? "loading"
                                                            : ""
                                                    }`}
                                                    onClick={(e) =>
                                                        this.deleteSite(host)
                                                    }
                                                >
                                                    Delete Site
                                                </Button>
                                            )}
                                        </React.Fragment>
                                    )}
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
        site_detail_v6: store.siteV6.siteV6.detail,
        delete: store.siteV6.siteV6.delete,
        delete_cancel: store.siteV6.siteV6.canceldelete,
        delete_instant: store.siteV6.siteV6.instantdelete,
    };
}

export default connect(mapStateToProps)(DeleteSiteComponentV6);
