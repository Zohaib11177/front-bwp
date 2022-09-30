import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*
This template is divided in two columns
using 6 col of bootstrap
*/

class TemplateHalf extends Component {
	render() {
		return (
			<section id="template-half" className="w-100 text-left">
				<Container>
					<Row>
						<Col xs={12} md={6} lg={6}>
							{this.props.children[0]}
						</Col>
						<Col xs={12} md={6} lg={6}>
							{this.props.children[1]}
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default TemplateHalf;
