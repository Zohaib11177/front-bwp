import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
class AddonCommentComponent extends Component {
    render() {
        return (
            <div className="box addon-right">
                <p>{this.props.message}</p>
                <ReactSVG
                    src={`${Configs.public_url}/assets/img/Oval.png`}
                    alt="oval"
                />{" "}
                <span>{this.props.author}</span>
            </div>
        );
    }
}
export default AddonCommentComponent;
