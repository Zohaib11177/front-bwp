import React, { Component } from 'react';
import TemplateMain from 'Templates/TemplateMain';
import 'Assets/css/sites.css';
import { Row, Col } from 'react-bootstrap';
import TableSiteListV3 from 'Components/V3/DataTableV3/SiteDataTableV3';
import { connect } from 'react-redux';
import SiteListActionV3 from 'Redux/V3/Sites/SiteList/SiteListActionV3';
import Pagination from 'Components/Pagination/PaginationComponent';
import SearchV3 from 'Components/V3/SearchV3/SearchComponentV3';
import NoDataHelper from 'Helpers/NoDataHelper';
import 'Assets/css/Responsive/SiteListResponsive.css';

class SiteListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(SiteListActionV3.siteGetV3());
    }

    render() {
        const siteList = this.props.site_list;
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="sitelist-page">
                        <Row>
                            <Col md={12}>
                                <SearchV3 dis={this.props.dispatch} />
                            </Col>
                        </Row>
                        <TableSiteListV3
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
                            ''
                        ) : (
                            <Pagination
                                title={'Sites'}
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
        site_list: state.siteV3.sitelistV3,
        pagination: state.siteV3.sitelistV3.pagination,
    };
}

export default connect(mapStateToProps)(SiteListComponent);
