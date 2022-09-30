import React, { Component } from "react";
import { Button, Form, Pagination, Dropdown } from "react-bootstrap";
import { ReactSVG } from "react-svg";
// import { Row, Col } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sitelist.css";
import TemplateSidebarLeft from "Templates/TemplateSidebarLeft";
import TableSiteList from "Components/SiteListPages/TableSiteList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
class SiteListPage extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="sitelist-page">
                        <TemplateSidebarLeft>
                            <div className="site-text"> Sites</div>
                            <Form className="search-form-width">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div class="form-group has-search searchbar-container ">
                                            <FontAwesomeIcon icon={faSearch} />
                                            <Button variant="outline-primary filter-button">
                                                <ReactSVG src="assets/img/filter.svg" />
                                                filters
                                            </Button>{" "}
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <Button
                                            variant="outline-primary"
                                            className="navigation-view-button"
                                        >
                                            <ReactSVG src="assets/img/navigation-menu.svg" />
                                        </Button>{" "}
                                        <Button
                                            variant="outline-primary "
                                            className="card-view-button"
                                        >
                                            <ReactSVG src="assets/img/card-view.svg" />
                                        </Button>{" "}
                                    </div>
                                </div>
                            </Form>
                            {/* <Badge variant="primary" class="filter-tag">
									{" "}
									<img
										className="filter-svg"
										alt=" "
										src="assets/img/filter.svg"
									/>
									Filters
								</Badge>{" "} */}
                        </TemplateSidebarLeft>
                        {/* <Row>
						<Col></Col>
						<Col>Domain</Col>
						<Col>IP Address</Col>
						<Col>WP Version</Col>
						<Col># Of Updates</Col>
						<Col>Date of Last backup</Col>
						<Col>TAGS</Col>
					</Row> */}
                        <TableSiteList />
                        <div className="row">
                            <div className="col-3">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        className="footer-dropdown"
                                    >
                                        10 sites per page
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-6">
                                <Pagination className="d-flex flex-row justify-content-center align-items-center ">
                                    {/* <Pagination.First /> */}
                                    <Pagination.Prev />
                                    <Pagination.Item active>
                                        {1}
                                    </Pagination.Item>
                                    {/* <Pagination.Ellipsis /> */}

                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item>{4}</Pagination.Item>
                                    <Pagination.Item>{5}</Pagination.Item>
                                    {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
                                    <Pagination.Item>{6}</Pagination.Item>

                                    {/* <Pagination.Ellipsis /> */}
                                    {/* <Pagination.Item>{20}</Pagination.Item> */}
                                    <Pagination.Next />
                                    {/* <Pagination.Last /> */}
                                </Pagination>
                            </div>

                            <div className="col-3"></div>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

export default SiteListPage;
