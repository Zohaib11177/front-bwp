import React, { Component } from "react";
class SpeedBeforeComponent extends Component {
	render() {
		return (
			<div className="">
				<div className="speed-box speed-before">
					{this.props.title}
					<span class={this.props.class}>
						{this.props.number} <small>{this.props.second}</small>
					</span>
				</div>
			</div>
		);
	}
}
export default SpeedBeforeComponent;
