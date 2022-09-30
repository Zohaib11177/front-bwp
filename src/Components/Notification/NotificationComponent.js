import React, { Component } from "react";
import { Row, Col, ListGroup, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import NotificationBusiness from "Businesses/NotificationBusiness";
import NotificationListAction from "Redux/V1/Notification/Get/NotificationGetAction";
import NotificationReadAction from "Redux/V1/Notification/NotificationRead/NotificationReadAction";
import InfiniteScroll from "react-infinite-scroll-component";
import ArrayCount from "Helpers/ArrayCount";
import Configs from "Configs";
import "Assets/css/notification.css";
import { ReactSVG } from "react-svg";
class NotificationComponent extends Component {
    state = {
        notification: 0,
        state_run: false,
        page: 1,
        noitification_total: 20,
    };
    componentDidMount() {
        const { user } = this.props.auth;
        const data = {
            id: user.id,
            page: this.state.page,
        };
        NotificationBusiness.socketImplement(
            this.props.dispatch,
            NotificationListAction.notificationGet,
            user.id
        );

        this.props.dispatch(NotificationListAction.notificationGet(data));
    }
    componentDidUpdate(nextProps) {
        if (nextProps.notificationList.loading) {
            let { notification } = this.state;
            notification = this.props.notificationList.notification_count;
            this.setState({
                notification,
            });

            nextProps.notificationList.loading = false;
        }
    }

    notificationReadFunction = () => {
        const { user } = this.props.auth;
        this.props.dispatch(NotificationReadAction.notificationRead(user.id));
        this.setState({
            notification: 0,
        });
    };

    scrollLoadingFunction = () => {
        const { total } = this.props.notificationList.pagination;
        const { user } = this.props.auth;
        let { noitification_total, page } = this.state;
        if (total > noitification_total) {
            this.setState({
                page: page + 1,
                noitification_total: noitification_total + 10,
            });
            const data = {
                id: user.id,
                page: this.state.page,
            };
            this.props.dispatch(NotificationListAction.notificationGet(data));
        }
    };

    render() {
        const { notification_list } = this.props.notificationList;
        const notificationCount = ArrayCount.count(notification_list);

        return (
            <React.Fragment>
                <Dropdown onClick={this.notificationReadFunction}>
                    <Dropdown.Toggle id="dropdown-basic">
                        <span className="badge bell-notification">
                            {this.state.notification}
                        </span>
                        <ReactSVG
                            src={`${Configs.public_url}/assets/img/HeaderIcons/bell-icon.svg`}
                            alt="bell-icon"
                            className="header-bell-icon"
                        />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="notification-box">
                        <ListGroup>
                            <ListGroup.Item>
                                <Row className="notify-drop">
                                    <Col sm={8} className="notify-title">
                                        {notificationCount !== 0
                                            ? "Notification"
                                            : "No notification available."}
                                    </Col>
                                    <Col
                                        sm={4}
                                        className="notify-title text-right"
                                    >
                                        <a href="/notifications">
                                            {notificationCount !== 0
                                                ? "View all"
                                                : ""}
                                        </a>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <InfiniteScroll
                                dataLength={ArrayCount.count(notification_list)}
                                next={this.scrollLoadingFunction}
                                hasMore={true}
                                height={notificationCount < 4 ? "auto" : 400}
                                // loader={<p className="p-2">Loading...</p>}
                            >
                                {NotificationBusiness.generate(
                                    notification_list
                                )}
                            </InfiniteScroll>
                        </ListGroup>
                    </Dropdown.Menu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        notificationList: state.notification.list,
        auth: state.authV4.loginV4,
    };
}

export default connect(mapStateToProps)(NotificationComponent);
