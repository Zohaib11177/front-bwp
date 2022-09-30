import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sites.css";
import "Assets/css/sitestile.css";
import TemplateSidebarLeft from "Templates/TemplateSidebarLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import TemplateHalf from "Templates/TemplateHalf";
import SiteTileBoxComponent from "Components/SiteTiles/SiteTileBoxComponent";
import Configs from "Configs";

class SiteTileComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <TemplateMain>
                    <div className="sitetile-page">
                        <TemplateSidebarLeft>
                            <div className="site-text"> Sites</div>
                            <Form className="search-form-width">
                                <Row>
                                    <Col md={9}>
                                        <div className="form-group has-search searchbar-container ">
                                            <span className="form-control-feedback ">
                                                <FontAwesomeIcon
                                                    icon={faSearch}
                                                />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control "
                                                placeholder="Search..."
                                            />
                                            <Button variant="outline-primary filter-button">
                                                {/* <ReactSVG src={`${Configs.public_url}/assets/img/filter.svg`} /> */}
                                                filters
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <Button
                                            variant="outline-primary"
                                            className="navigation-view-button"
                                            href="sites"
                                        >
                                            <ReactSVG
                                                src={`${Configs.public_url}/assets/img/navigation-menu.svg`}
                                            />
                                        </Button>
                                        <Button
                                            variant="outline-primary "
                                            className="card-view-button"
                                            href="sitestile"
                                        >
                                            <ReactSVG
                                                src={`${Configs.public_url}/assets/img/card-view.svg`}
                                            />
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </TemplateSidebarLeft>

                        <TemplateHalf>
                            <SiteTileBoxComponent />
                            <SiteTileBoxComponent />
                        </TemplateHalf>

                        <TemplateHalf>
                            <SiteTileBoxComponent />
                            <SiteTileBoxComponent />
                        </TemplateHalf>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

export default SiteTileComponent;
