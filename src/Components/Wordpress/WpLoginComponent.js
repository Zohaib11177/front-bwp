import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import { Button } from "react-bootstrap";

class WpLoginComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Button
                    className={this.props.className}
                    onClick={this.props.onClick}
                >
                    <ReactSVG
                        alt={this.props.alt}
                        src={this.props.src}
                        onClick={this.props.onClickSvg}
                        className={this.props.classNameReactSVG}
                    />
                    {this.props.text}
                </Button>
            </React.Fragment>
        );
    }
}

export default WpLoginComponent;
