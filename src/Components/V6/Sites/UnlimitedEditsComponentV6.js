import React, { Component } from "react";
import "Assets/css/Responsive/Footer.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import UnlimitedEditsActionV6 from "Redux/V6/Sites/Addons/UnlimitedEdits/UnlimitedEditsActionV6";
import Confirmation from "Helpers/ConfirmationHelper";

class UnlimitedEditsComponentV6 extends Component {
    ToggleUnlimitedEdits = (host, addon) => {
        const data = {
            host,
            status: !addon.unlimited_edits,
        };

        if (addon.unlimited_edits) {
            this.props.dispatch(UnlimitedEditsActionV6.unlimitedEdits(data));
        } else {
            Confirmation(
                this.props.dispatch,
                UnlimitedEditsActionV6.unlimitedEdits(data),

                `Please note that unlimited edits is a paid add on ($39 per month) and would be billed monthly. <br><div class="note-text">Note: If you are using free site, you will not be charged</div>`
            );
        }
    };
    render() {
        const site_addons = this.props.site_addons;
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card-blue mb-4 card-md-adj">
                        <div className="card-blue--header">
                            <span>Addon Unlimited Edits</span>
                        </div>
                        <div className="card-blue--content">
                            <div className="text-btn--wrap">
                                <div className="text-col">
                                    <span className="font-14 light-txt-color f-adj">
                                        Deep App Level Support, we call it
                                        Unlimited Edits. If you want our team of
                                        passionate WP Engineers to make all your
                                        edits for you just check this box and
                                        get unlimited 30 min edits.
                                    </span>
                                </div>
                                <div className="btn-col">
                                    <React.Fragment>
                                        <Button
                                            className={`btn btn-primary btn-bionic w-btn w-adj px-4 ${
                                                this.props.unlimited_edits
                                                    .loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                            onClick={(e) =>
                                                this.ToggleUnlimitedEdits(
                                                    this.props.host,
                                                    site_addons
                                                )
                                            }
                                        >
                                            {site_addons.unlimited_edits
                                                ? "Disable"
                                                : "Enable"}
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
        unlimited_edits: store.siteV6.addonV6.unlimited_edits,
    };
}

export default connect(mapStateToProps)(UnlimitedEditsComponentV6);
