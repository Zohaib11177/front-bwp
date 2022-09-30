import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*
This template is divided in three columns
using 4 col of bootstrap
*/

class TemplateFourColumns extends Component {
    render() {
        return (
            <section id="template-three-columns" className="w-100 text-left">
                <Container>
                    <Row>
                        <Col xs={12} md={3} lg={3}>
                            {this.props.children[0]}
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            {this.props.children[1]}
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            {this.props.children[2]}
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            {this.props.children[3]}
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TemplateFourColumns;
