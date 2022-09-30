import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class OperationComponent extends Component {
    operationFunction = () => {
        this.props.dis(this.props.action(this.props.identity));
    };

    render() {
        return (
            <React.Fragment>
                <div className="box">
                    <Row>
                        <Col lg="8">
                            <FontAwesomeIcon icon={this.props.icon} />
                            <div className="operation-title">
                                {this.props.title}
                            </div>
                            <div className="operation-desc">
                                {this.props.description}
                            </div>
                        </Col>
                        <Col lg="4" className="text-right align-self-center ">
                            <Button
                                className={`updatebtn bionic-btn ${
                                    this.props.loading ? "loading" : ""
                                }`}
                                onClick={this.operationFunction}
                            >
                                {this.props.title}
                            </Button>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default OperationComponent;
