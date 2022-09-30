import React, { Component } from "react";
class ChangeLogInnerComponent extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="changelog-inner">
					<div className="d-flex">
						<div className={`pill ${ this.props.badgeClass }`}>{this.props.badgeText}</div>
						{this.props.badge2}
						<div className=" ml-auto">
							{this.props.date}
						</div>
					</div>
					<p>
						{this.props.detail}
					</p>
				</div>
			</React.Fragment>
		);
	}
}
export default ChangeLogInnerComponent;
