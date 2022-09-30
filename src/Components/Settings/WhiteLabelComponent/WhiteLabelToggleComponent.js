import React, { Component } from "react";
import ServiceListAction from "Redux/V1/Settings/Services/Get/ServiceGetAction";
import { Row, Col } from "react-bootstrap";
// import NerdModeAction from "Redux/V1/Settings/NerdMode/NerdModeActions";
import Swal from "sweetalert2";
import WhiteLabelAction from "Redux/V1/Settings/WhiteLabelToggle/WhiteLabelToggleAction";
import { connect } from "react-redux";
import PermissionBusiness from "Businesses/PermissionBusiness";

class WhiteLabelToggleComponent extends Component {
    componentWillMount() {
        this.props.dispatch(ServiceListAction.serviceGet());
    }

    toggleWhiteLabel = () => {
        if (!this.serviceStatus(this.props.services, 1)) {
            return Swal.fire({
                title: "Are you sure?",
                text: "This action will cost you $150. If you really want to perform this action, click yes",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then((result) => {
                if (result.value) {
                    return this.props.dispatch(
                        WhiteLabelAction.whiteLabelToggle()
                    );
                }
            });
        }
        this.props.dispatch(WhiteLabelAction.whiteLabelToggle());
    };
    serviceStatus = (services, id) => {
        const service = services.filter((service) => {
            return service.id === id;
        });

        return service.length > 0 ? service[0].acquire : false;
    };
    render() {
        const permissionDenied = !PermissionBusiness.operationPermission(
            ["services_enable"],
            1
        )
            ? true
            : false;
        return (
            <React.Fragment>
                <div
                    className={`other-settings-main ${
                        permissionDenied ? "loading" : ""
                    }`}
                >
                    <div className="box">
                        <Row className="ssh-box">
                            <Col lg="9" className="notifications-title col-8">
                                White Label
                            </Col>
                            <Col lg="3" className="text-right col-4">
                                <span>
                                    <input
                                        name="nerd_mode"
                                        className="react-switch-checkbox white-label-toggle-class"
                                        id={`react-switch-white-label`}
                                        type="checkbox"
                                        disabled={
                                            this.props.services.length > 0
                                                ? false
                                                : true
                                        }
                                        onChange={() => this.toggleWhiteLabel()}
                                        checked={this.serviceStatus(
                                            this.props.services,
                                            1
                                        )}
                                    />
                                    <label
                                        className="react-switch-label"
                                        htmlFor={`react-switch-white-label`}
                                    >
                                        <span
                                            className={`react-switch-button`}
                                        />
                                    </label>
                                </span>
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
    return {
        services: state.settings.servicesList.services,
    };
};

export default connect(mapStateToProps)(WhiteLabelToggleComponent);
