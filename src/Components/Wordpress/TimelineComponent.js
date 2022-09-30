import React, { Component } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import TimelineBusiness from "Businesses/TimelineBusiness";
import ArrayCount from "Helpers/ArrayCount";
class TimelineComponent extends Component {
    render() {
        let { timeline, className, identity } = this.props;
        timeline = timeline || [];
        return (
            <React.Fragment>
                {" "}
                <div className={`box ${className}`}>
                    <Row>
                        <Col lg="12">
                            <div className="page-header ml-0">
                                Timeline{" "}
                                <small className="float-right">
                                    {ArrayCount.count(timeline) === 0 ? null : (
                                        <a href={`/timelines/${identity}`}>
                                            View All
                                        </a>
                                    )}
                                </small>
                            </div>
                            <ListGroup>
                                {TimelineBusiness.timeline(timeline)}
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default TimelineComponent;
