import React, { Component } from "react";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sites.css";
import { Row, Col } from "react-bootstrap";
import TableSiteListV6 from "Components/V6/SiteList/SiteDataTableV6";
import { connect } from "react-redux";
import SiteListActionV6 from "Redux/V6/Sites/SiteList/SiteListActionV6";
import Pagination from "Components/Pagination/PaginationComponent";
import SearchV6 from "Components/V6/SiteList/SearchComponentV6";
import NoDataHelper from "Helpers/NoDataHelper";
import "Assets/css/Responsive/SiteListResponsive.css";

class SiteListComponentV6 extends Component {
    componentDidMount() {
        this.props.dispatch(SiteListActionV6.siteGetV6());
    }

    render() {
        const siteList = this.props.site_list;
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="sitelist-page">
                        <Row>
                            <Col md={12}>
                                <SearchV6 dis={this.props.dispatch} />
                            </Col>
                        </Row>
                        <TableSiteListV6/>
                        {NoDataHelper.available(
                            siteList.site_list,
                            siteList.loading
                        )}
                        {NoDataHelper.available(siteList.site_list) ? (
                            ""
                        ) : (
                            <Pagination
                                title={"Sites"}
                                showMax={4}
                                perPage={this.props.pagination.per_page}
                                totalPages={this.props.pagination.total_pages}
                                currentPage={this.props.pagination.current_page}
                            />
                        )}
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        site_list: state.siteV6.sitelistV6,
        pagination: state.siteV6.sitelistV6.pagination,
    };
}

export default connect(mapStateToProps)(SiteListComponentV6);
