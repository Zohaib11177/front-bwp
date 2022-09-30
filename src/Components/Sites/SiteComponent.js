import React, { Component } from "react";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sites.css";
import { Row, Col } from "react-bootstrap";
import TableSiteList from "Components/DataTable/SiteDataTable";
import { connect } from "react-redux";
import SiteListAction from "Redux/V1/Sites/Site/Get/SiteGetAction";
import Pagination from "Components/Pagination/PaginationComponent";
import Search from "Components/Search/SearchComponent";
import NoDataHelper from "Helpers/NoDataHelper";
import "Assets/css/Responsive/SiteListResponsive.css";
class Sites extends Component {
    state = {
        reload: false,
    };

    componentDidMount() {
        this.props.dispatch(SiteListAction.siteGet());
    }

    render() {
        const { siteList } = this.props;
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="sitelist-page">
                        <Row>
                            <Col md={3}>
                                <div className="site-text d-none"> Sites</div>
                            </Col>
                            <Col md={9}>
                                <Search dis={this.props.dispatch} />
                            </Col>
                        </Row>
                        <TableSiteList
                        /* sites={siteList.site_list}
                            dispatch={this.props.dispatch}
                            reload={
                                siteList.site_list.filter((site) => {
                                    return site.status === "launching";
                                })
                                    ? true
                                    : false
                            } */
                        />
                        {NoDataHelper.available(
                            siteList.site_list,
                            siteList.loading
                        )}
                        {NoDataHelper.available(siteList.site_list) ? (
                            ""
                        ) : (
                            <Pagination
                                title={"Sites"}
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
        siteList: state.site.site.list,
        pagination: state.site.site.list.pagination,
        loading: state.site.site.list.loading,
    };
}

export default connect(mapStateToProps)(Sites);
