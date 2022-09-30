import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PaginationDropDown from 'Components/Pagination/DropDownComponent';
import PaginationNumber from 'Components/Pagination/PaginationNumberComponent';
import 'Assets/css/Responsive/SiteListResponsive.css';
class Pagination extends Component {
    render() {
        return (
            <Row className="mt-3">
                <Col md={4}>
                    <PaginationDropDown
                        title={this.props.title}
                        perPage={this.props.perPage}
                    />
                </Col>
                <Col
                    md={4}
                    className="pagination-res site-list-pagination-number">
                    <PaginationNumber
                        showMax={this.props.showMax || 2}
                        totalPages={this.props.totalPages}
                        perPage={this.props.perPage}
                        currentPage={this.props.currentPage}
                    />
                </Col>

                <Col md={4}> </Col>
            </Row>
        );
    }
}

export default Pagination;
