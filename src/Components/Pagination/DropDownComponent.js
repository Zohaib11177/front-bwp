import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import PaginationBusiness from "Businesses/PaginationBusiness";
import "Assets/css/pagination.css";
class PaginationDropDown extends Component {
    // pages = (pages) => {
    //     window.location.href = `?page_limit=${pages}`;
    // };
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown-basic"
                    className="footer-dropdown affiliate-dropdown-main site-list-page-dropdown-main"
                >
                    {`${
                        this.props.perPage === undefined
                            ? 0
                            : this.props.perPage
                    } ${this.props.title} per page`}
                </Dropdown.Toggle>

                <Dropdown.Menu className="pagination-dropdown-width pagination-dropdown-billing-width affiliate-dropdown-width  site-list-dropdown-menu-main">
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pageLimit(10);
                        }}
                    >
                        {`10 ${this.props.title} per page`}
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pageLimit(25);
                        }}
                    >
                        {`25 ${this.props.title} per page`}
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pageLimit(50);
                        }}
                    >
                        {`50 ${this.props.title} per page`}
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            PaginationBusiness.pageLimit(100);
                        }}
                    >
                        {`100 ${this.props.title} per page`}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default PaginationDropDown;
