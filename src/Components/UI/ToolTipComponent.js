import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
    faInfoCircle,
    faQuestionCircle,
} from "@fortawesome/fontawesome-free-solid";
import { ReactSVG } from "react-svg";
class ToolTipComponent extends Component {
    render() {
        const icon =
            this.props.type === "info" ? faInfoCircle : faQuestionCircle;
        const { iconClassName, src } = this.props;
        return (
            <React.Fragment>
                <div
                    className={this.props.containerClasses}
                    onClick={this.props.onClick}
                >
                    <OverlayTrigger
                        aria-haspopup="true"
                        data-disable-for-touch="false"
                        data-disable-for-mobile="true"
                        placement={"bottom"}
                        overlay={
                            <Tooltip
                                id="tooltip"
                                className="button-tooltip site-backup-tooltip site-clone-tooltip "
                            >
                                {this.props.text}
                            </Tooltip>
                        }
                    >
                        {/* <> */}
                        <ReactSVG
                            src={src}
                            icon={icon}
                            className={`tool-tip-icon ${iconClassName}`}
                        />
                        {/* {button ? buttonContent : null}{" "} */}
                        {/* </> */}
                    </OverlayTrigger>
                </div>
            </React.Fragment>
        );
    }
}

export default ToolTipComponent;
