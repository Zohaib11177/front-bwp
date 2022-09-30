import React, { Component } from "react";
import TemplateHalfFluid from "Templates/TemplateHalfFluid";
import NewsComponent from "Components/NewsComponents/NewsComponent";
import LoginComponent from "Components/Auths/LoginComponents/LoginComponent";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";

class LoginTemplateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { loading } = this.props.portalSettings
        return (
            <div className="form-full">
                <TemplateHalfFluid loading={loading}>
                    <React.Fragment>
                        <LoginComponent />
                    </React.Fragment>
                    <React.Fragment>
                        <NewsComponent />
                    </React.Fragment>
                </TemplateHalfFluid>
                <ToastContainer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        portalSettings: state.portalSettingsV6.list
    };
}


export default connect(mapStateToProps)(LoginTemplateComponent);
