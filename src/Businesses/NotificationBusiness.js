import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import LocalStorageHelper from "Helpers/LocalStorageHelper";
import TextLimitHelper from "Helpers/TextLimitHelper";
import openSocket from "socket.io-client";
import ToastHelper from "Helpers/ToastHelper";
import config from "Configs/index";
import TimeStampHelper from "Helpers/TimeStampHelper";

const socketImplement = (dispatch, action, id) => {
    const data = {
        id: id,
        page: 1,
    };
    const serverUrl = config.logify;
    console.log(serverUrl);
    const user = LocalStorageHelper.get("user");
    const socket = openSocket(serverUrl);

    try {
        socket.on(user.id, (message) => {
            dispatch(action(data));
            ToastHelper.notification(message.title);
        });
    } catch (error) {
        console.log(error);
    }
};

const generate = (data) => {
    const list = data.map((notification, index) => {
        return (
            <ListGroup.Item>
                <Row className="notify-drop cursor-pointer">
                    <Col sm={9} className="notify-subtitle">
                        <h6 className="mb-0 custom-text-dark">
                            {notification.title}
                        </h6>
                        <p className="mb-0 custom-text-light">
                            {TextLimitHelper.limit(
                                notification.description,
                                50
                            )}
                        </p>
                    </Col>
                    <Col sm={3} className="text-right notify-date">
                        {notification.created_at}
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    });
    return list;
};

const notificationFilter = (data) => {
    const list = data.filter((notification) => {
        return notification.status !== true;
    });
    return list;
};

const listGenerate = (notification) => {
    let notificationList = notification || [];
    return notificationList.map((notification) => {
        return (
            <tr className="timeline-table-main">
                <td data-label="description">
                    <div className="m-0">{notification.description}</div>
                </td>
                <td data-label="title">
                    <div className="m-0"> {notification.title} </div>
                </td>

                <td data-label="Date/Time">
                    <div className="m-0">
                        {TimeStampHelper.standardDateTimeFormat(
                            notification.createdAt
                        )}{" "}
                    </div>
                </td>
            </tr>
        );
    });
};
const NotificationBusiness = {
    generate,
    notificationFilter,
    socketImplement,
    listGenerate,
};
export default NotificationBusiness;
