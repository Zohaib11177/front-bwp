import React, { Component } from "react";

import TemplateHalfFluid from "Templates/TemplateHalfFluid";
import NewsComponent from "Components/NewsComponents/NewsComponent";
import RegistrationComponent from "Components/Auths/RegistrationComponents/RegistrationComponent";

class RegistrationTemplateComponent extends Component {
	render() {
		return (
			<div className="form-full register-page">
				<TemplateHalfFluid>
					<React.Fragment>
						<RegistrationComponent
							promoCode={this.props.match.params.promocode}
						/>
					</React.Fragment>
					<React.Fragment>
						<NewsComponent />
					</React.Fragment>
				</TemplateHalfFluid>
			</div>
		);
	}
}

export default RegistrationTemplateComponent;
