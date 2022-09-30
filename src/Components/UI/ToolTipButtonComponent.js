import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ToolTipButtonComponent extends Component {
    render() {
        const { buttonContent } = this.props;
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
                        {buttonContent}
                    </OverlayTrigger>
                </div>
            </React.Fragment>
        );
    }
}

export default ToolTipButtonComponent;
