import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
class ErrorBoundaryComponent extends Component {
    state = {
        hasError: false,
    };
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div id="error-caught">
                    <ReactSVG
                        title="Error"
                        src={`${Configs.public_url}/assets/img/General/warning.svg`}
                        alt="warning"
                    />
                    <h3>Something went wrong</h3>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundaryComponent;
