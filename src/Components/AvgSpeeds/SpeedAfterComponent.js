import React, { Component } from "react";

class SpeedAfterComponent extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="speed-box speed-after">
                    {this.props.title}
                    <span>
                        {this.props.number} <small>{this.props.second}</small>
                    </span>
                </div>
            </div>
        );
    }
}
export default SpeedAfterComponent;
