import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Configs from "Configs";
import ToolTipComponent from "Components/UI/ToolTipComponent";
import "Assets/css/Responsive/SiteDetailUpdate.css";

const generate = (
    data,
    name,
    updateName,
    updateSlug,
    lockFunction,
    updateFunction,
    lockLoading
) => {
    const allItems = data.map((item) => {
        return (
            <Row className="align-items-center mt-2" key={item.id}>
                <Col lg="3" xs="4">
                    <div className="update-desc">
                        {" "}
                        {item.current_version === undefined ? null : item.name}
                    </div>
                </Col>
                <Col lg="3" xs="4">
                    <div className="update-desc current-version">
                        {item.current_version}
                    </div>
                </Col>
                <Col lg="3" xs="2" className="pl-0 updated-status-col ">
                    <div className="update-desc update-status">
                        {item.update_version === null
                            ? "Updated"
                            : item.update_version}
                    </div>
                </Col>
                <Col lg="1" xs="1" className="float-left lock-update-button">
                    <div
                        // className="float-left lock-img"
                        className={`float-left lock-img ${
                            lockLoading === true ? "loading" : ""
                        }`}
                        onClick={() => lockFunction(item.slug)}
                    >
                        {item.current_version ===
                        undefined ? null : item.lock ? (
                            <ToolTipComponent
                                iconClassName="update-lock-icon"
                                // iconClassName="update-lock-icon"
                                text="Unlock Plugin to allow  updates"
                                src={`${Configs.public_url}/assets/img/General/lock-1.svg`}
                            ></ToolTipComponent>
                        ) : (
                            <ToolTipComponent
                                iconClassName="update-unlock-icon"
                                // iconClassName="update-unlock-icon"
                                text="Lock Plugin to restrict updates"
                                src={`${Configs.public_url}/assets/img/General/unlock.svg`}
                            ></ToolTipComponent>
                        )}
                    </div>
                </Col>
                <Col lg="2" className="site-wp-update-button-col">
                    {item.current_version === undefined ? null : (
                        <Button
                            className={`btn btn-block bionic-btn ${
                                updateSlug === item.slug ||
                                updateSlug === updateName
                                    ? "loading"
                                    : ""
                            }`}
                            disabled={item.lock || item.update_version === null}
                            onClick={() => updateFunction(name, item.slug)}
                        >
                            Update
                        </Button>
                    )}
                </Col>
            </Row>
        );
    });
    return allItems;
};
const SiteUpdateBusiness = {
    generate,
};
export default SiteUpdateBusiness;
