import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GenereicLoadingComponent from "Components/UI/GenereicLoadingComponent";
/*
This template is in full width
using 12 col of bootstrap
*/

class TemplateHalfFluid extends Component {
	render() {
		return (
			<section id="template-full-fluid" className="w-100 text-left">
				{
					this.props.loading ?
						<GenereicLoadingComponent/>
						:
						<Container fluid>
							<Row>
								<Col xs={12} md={6} lg={6} className="column-one">
									{this.props.children[0]}
								</Col>
								<Col xs={12} md={6} lg={6}>
									{this.props.children[1]}
								</Col>
							</Row>
						</Container>
				}
			</section>
		);
	}
}

export default TemplateHalfFluid;
