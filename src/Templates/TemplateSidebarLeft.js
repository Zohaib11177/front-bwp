import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*
This template is divided in two columns
using 4 col on left
8 col on right
*/

class TemplateSideLeft extends Component {
	render() {
		return (
			<section
				id="template-side-left"
				className="w-100 text-left"
			>
				<Container>
					<Row>
						<Col xs={12} md={4} lg={4}>
							{this.props.children[0]}
						</Col>
						<Col xs={12} md={8} lg={8}>
							{this.props.children[1]}
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default TemplateSideLeft;
