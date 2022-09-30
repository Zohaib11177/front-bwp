import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import StagingLogsAction from "Redux/V1/Staging/StagingLogs/StagingLogsAction";
import StringHelper from "Helpers/StringHelper";
import NoData from "Helpers/NoDataHelper";
import Pagination from "Components/Pagination/PaginationComponent";
import TableComponent from "Components/UI/TableComponent";
import "Assets/css/Responsive/TimeLineTable.css";
import StagingBusiness from "Businesses/StagingBusiness";

class StagingLogsListComponent extends Component {
    componentDidMount() {
        this.props.dispatch(StagingLogsAction.stagingLogs(this.props.identity));
    }
    render() {
        const { stagingLogs, identity } = this.props;
        const { loading, staging_logs } = stagingLogs;
        const { pagination } = staging_logs;

        const list = StagingBusiness.logsGenerate(staging_logs.staging_logs);
        const tableHeadings = ["Action", "Type", "Date/Time"];
        return (
            <React.Fragment>
                {" "}
                <div className={`box mt-5 box-shadow`}>
                    <Row>
                        <Col md={12}>
                            <div className="page-header ml-4 pl-1 timeline-list-header">
                                {StringHelper.capitalize(identity)}{" "}
                            </div>

                            <TableComponent
                                classNameTable="timeline-table-body"
                                thead={tableHeadings}
                                noData={NoData.available(staging_logs, loading)}
                                tbody={list}
                            />
                        </Col>
                    </Row>
                </div>{" "}
                {NoData.available(
                    staging_logs.staging_logs ? staging_logs.staging_logs : [],
                    loading
                ) ? (
                    ""
                ) : (
                    <Pagination
                        title={"Staging Logs"}
                        perPage={pagination.per_page}
                        totalPages={pagination.total_pages}
                        currentPage={pagination.current_page}
                    />
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stagingLogs: state.staging.logs,
        siteDetail: state.SiteDetailReducer.site_detail,
    };
};

export default connect(mapStateToProps)(StagingLogsListComponent);
