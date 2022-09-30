import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "Assets/css/Responsive/SiteLaunch.css";

/*
This template is divided in two columns
using 8 col on left
4 col on right
*/

class TemplateSideRight extends Component {
    render() {
        return (
            <section id="template-side-right" className="w-100 text-left">
                <Container>
                    <Row>
                        <Col
                            xs={12}
                            md={8}
                            lg={8}
                            className="sitelaunch-responsive-box-left"
                        >
                            {this.props.children[0]}
                        </Col>
                        <Col
                            xs={12}
                            md={4}
                            lg={4}
                            className="sitelaunch-responsive-box-right"
                        >
                            {this.props.children[1]}
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TemplateSideRight;
