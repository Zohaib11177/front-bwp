import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import Configs from "Configs";

class HideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: "password",
            value: this.props.value,
        };
        this.showHide = this.showHide.bind(this);
    }
    showHide(e) {
        this.setState({
            field: this.state.field === "text" ? "password" : "text",
        });
    }
    render() {
        return (
            <React.Fragment>
                <input
                    className="copytextarea"
                    value={this.props.value}
                    defaultValue={this.state.value}
                    type={this.state.field}
                    readOnly
                />

                <span className={this.state.field} onClick={this.showHide}>
                    {this.state.field === "text" ? (
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/General/eye-not.svg`}
                            alt="copyimage"
                            className="copy-icon"
                        />
                    ) : (
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/General/eye.svg`}
                            alt="copyimage"
                            className="copy-icon"
                        />
                    )}
                </span>
            </React.Fragment>
        );
    }
}

export default HideShow;
