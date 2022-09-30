import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "Assets/css/sitedetail.css";
import "Assets/css/profile.css";
import "Assets/css/form.css";
import { connect } from "react-redux";
import NerdModeAction from "Redux/V1/Settings/NerdMode/NerdModeAction";
import "Assets/css/Responsive/Settings.css";
class NerdModeComponent extends Component {
    state = {
        nerd_mode: false,
    };

    handleChange = () => {
        this.props.dispatch(NerdModeAction.nerdMode());
    };

    render() {
        const { nerdMode } = this.props;
        if (nerdMode.nerd_mode === "account_nerd_mode") {
            const perm = [];
            perm[0] = nerdMode.nerd_mode;
            localStorage.setItem("permissions", JSON.stringify(perm));
        }
        if (nerdMode.nerd_mode === undefined) {
            localStorage.setItem("permissions", JSON.stringify([]));
        }
        let permission, permissionLength;
        try {
            permission = JSON.parse(window.localStorage.getItem("permissions"));
            permissionLength = permission.indexOf("account_nerd_mode");
        } catch {
            console.log("permission is empty");
        }
        return (
            <React.Fragment>
                <div className="other-settings-main">
                    <div className="box">
                        <Row className="ssh-box">
                            <Col lg="9" className="notifications-title col-8">
                                Nerd Mode
                            </Col>
                            <Col
                                lg="3"
                                className={`text-right col-4 ${
                                    nerdMode.loading ? "loading-nerd-mode" : ""
                                }`}
                            >
                                <input
                                    name="nerd_mode"
                                    className="react-switch-checkbox"
                                    id={`react-switch-new3`}
                                    type="checkbox"
                                    onChange={this.handleChange}
                                    checked={
                                        permissionLength !== -1 ? true : false
                                    }
                                    disabled={nerdMode.loading ? true : false}
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new3`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div></div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(NerdModeComponent);
