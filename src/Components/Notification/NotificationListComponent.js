import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import TemplateMain from "Templates/TemplateMain";
import NotificationListAction2 from "Redux/V1/Notification/List/NotificationListAction";
import StringHelper from "Helpers/StringHelper";
import NoData from "Helpers/NoDataHelper";
import Pagination from "Components/Pagination/PaginationComponent";
import TableComponent from "Components/UI/TableComponent";
import "Assets/css/Responsive/TimeLineTable.css";
import NotificationBusiness from "Businesses/NotificationBusiness";

class NotificationListComponent extends Component {
    componentDidMount() {
        const { user } = this.props.auth;
        const data = {
            id: user.id,
        };

        this.props.dispatch(NotificationListAction2.notificationList(data));
    }
    render() {
        const { notificationList } = this.props;
        const { loading, notification_list, pagination } = notificationList;
        const list = NotificationBusiness.listGenerate(notification_list);
        const tableHeadings = ["Notification", "Title", "Date/Time"];
        const { user } = this.props.auth;

        return (
            <React.Fragment>
                {" "}
                <TemplateMain classNameSection="">
                    {" "}
                    <div className={`box mt-5 box-shadow`}>
                        <Row>
                            <Col md={12}>
                                <div className="page-header ml-4 pl-1 timeline-list-header">
                                    {StringHelper.capitalize(user.first_name)}{" "}
                                </div>

                                <TableComponent
                                    classNameTable="timeline-table-body"
                                    thead={tableHeadings}
                                    noData={NoData.available(
                                        notification_list,
                                        loading
                                    )}
                                    tbody={list}
                                />
                            </Col>
                        </Row>
                    </div>{" "}
                    {NoData.available(notification_list, loading) ? (
                        ""
                    ) : (
                        <Pagination
                            title={"Notifications"}
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
        notificationList: state.notification.notificationList,
        auth: state.authV4.loginV4,
    };
};

export default connect(mapStateToProps)(NotificationListComponent);
