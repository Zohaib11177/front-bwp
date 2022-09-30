import React, { Component } from 'react';
import PaginationBusiness from 'Businesses/PaginationBusiness';
import Pagination from 'react-bootstrap-4-pagination';
import 'Assets/css/pagination.css';
class PaginationNumber extends Component {
    render() {
        return (
            <Pagination
                threeDots
                totalPages={this.props.totalPages}
                currentPage={this.props.currentPage}
                showMax={this.props.showMax || 2}
                prevNext
                onClick={(number) =>
                    PaginationBusiness.pagesGet(this.props.perPage, number)
                }
                activeBgColor="var(--main-color)  !important;"
                activeColor="#fff !important"
            />
        );
    }
}

export default PaginationNumber;
