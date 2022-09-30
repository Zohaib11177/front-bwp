import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*
This template is in full width
using 12 col of bootstrap
*/

class TemplateFullFluid extends Component {
	render() {
		return (
			<section id="template-full-fluid" className="w-100 text-left">
				<Container fluid>
					<Row>
						<Col xs={12} md={12} lg={12}>
							{this.props.children}
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default TemplateFullFluid;
