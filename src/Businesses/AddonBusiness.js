import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import AddonsConstant from "Constants/AddonsConstant";
const generate = (data, loading, toggleFunction, addonId) => {
    return data.map((addon) => {
        // eslint-disable-next-line
        AddonsConstant.description.map((item) => {
            if (addon.name === item.name) {
                return (addon.description = item.description);
            }
        });
        return (
            <div className="box">
                <Row>
                    <Col lg="9">
                        <div className="page-header">{addon.name}</div>
                        <div className="">
                            <p>{addon.description}</p>
                        </div>
                    </Col>
                    <Col
                        lg="3"
                        className="text-right align-self-center align-self-responsive"
                    >
                        {addon.status ? (
                            <Button
                                className={`updatebtn bionic-btn mt-4 ${
                                    addon.id === addonId && loading
                                        ? "loading"
                                        : ""
                                }`}
                                onClick={(e) =>
                                    toggleFunction(
                                        addon.id,
                                        false,
                                        addon.date_purchase,
                                        addon.name,
                                        addon.price
                                    )
                                }
                            >
                                Disable
                            </Button>
                        ) : (
                            <Button
                                className={`updatebtn bionic-btn mt-4 ${
                                    addon.id === addonId && loading
                                        ? "loading"
                                        : ""
                                }`}
                                onClick={() =>
                                    toggleFunction(
                                        addon.id,
                                        true,
                                        addon.date_purchase,
                                        addon.name,
                                        addon.price
                                    )
                                }
                            >
                                Enable
                            </Button>
                        )}
                    </Col>
                </Row>
            </div>
        );
    });
};

const AddonBusiness = {
    generate,
};

export default AddonBusiness;
