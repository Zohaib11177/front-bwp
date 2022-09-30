import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import TimelineBusiness from "Businesses/TimelineBusiness";
import TemplateMain from "Templates/TemplateMain";
import WordpressTimelineAction from "Redux/V1/Sites/Wordpress/WordpressTimeline/WordpressTimelineAction";
import StringHelper from "Helpers/StringHelper";
import NoData from "Helpers/NoDataHelper";
import Pagination from "Components/Pagination/PaginationComponent";
import TableComponent from "Components/UI/TableComponent";
import "Assets/css/Responsive/TimeLineTable.css";

class TimelineListComponent extends Component {
    componentDidMount() {
        const { identity } = this.props.match.params;
        this.props.dispatch(
            WordpressTimelineAction.wordpressTimeline(identity)
        );
    }
    render() {
        const { timelineList } = this.props;
        const { loading, timeline, pagination } = timelineList;
        const { identity } = this.props.match.params;
        const list = TimelineBusiness.listGenerate(timeline);
        const tableHeadings = [
            "Updated By",
            "Type",
            "Old Version",
            "Updated Version",
            "Date/Time",
        ];

        return (
            <React.Fragment>
                {" "}
                <TemplateMain classNameSection="">
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
                                    noData={NoData.available(timeline, loading)}
                                    tbody={list}
                                />
                            </Col>
                        </Row>
                    </div>{" "}
                    {NoData.available(timeline, loading) ? (
                        ""
                    ) : (
                        <Pagination
                            title={"Updates"}
                            perPage={pagination.per_page}
                            totalPages={pagination.total_pages}
                            currentPage={pagination.current_page}
                        />
                    )}
                </TemplateMain>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timelineList: state.site.wordpress.timeline,
    };
};

export default connect(mapStateToProps)(TimelineListComponent);
