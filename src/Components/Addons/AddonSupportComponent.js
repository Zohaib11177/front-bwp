import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import Configs from "Configs";

class AddonSupportComponent extends Component {
    render() {
        return (
            <div className="addon-icon">
                <Button variant="" className="float-left">
                    <ReactSVG
                        src={`${Configs.public_url}/assets/img/plus.svg`}
                        alt=""
                    />
                </Button>
                <div>{this.props.title}:</div>
                <span>{this.props.price}</span>
            </div>
        );
    }
}
export default AddonSupportComponent;
