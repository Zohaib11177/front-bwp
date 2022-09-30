import React, { Component } from "react";
import { Row, Col, Button, Accordion, Card } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/siteallupdate.css";
// import TemplateSideRight from "Templates/TemplateSidebarRight";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import WordpressContainerAction from "Redux/V1/Sites/Wordpress/WordpressContainer/WordpressContainerAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/fontawesome-free-solid";
import WordpressUpdateAllActionV6 from "Redux/V6/Sites/Wordpress/WordpressUpdateAll/WordpressUpdateAllActionV6";
import WordpressUpdateActionV6 from "Redux/V6/Sites/Wordpress/WordpressUpdate/WordpressUpdateActionV6";
import Configs from "Configs";
import SiteBusiness from "Businesses/SiteBusiness";
import NoData from "Helpers/NoDataHelper";
import UpdateSubMenuComponent from "Components/SiteAllUpdates/Ui/UpdateSubMenuComponentResponsive";
import { ReactSVG } from "react-svg";
import "Assets/css/Responsive/SubMenu.css";
import "Assets/css/Responsive/SiteAllUpdate.css";
class SiteAllUpdateComponent extends Component {
    componentDidMount() {
        this.props.dispatch(WordpressContainerAction.wordpressContainer());
    }

    updateAllContainers = () => {
        const identities = this.props.wordpressContainer.wordpress.map(
            (site) => {
                return site.identity;
            }
        );
        this.props.dispatch(WordpressUpdateAllActionV6.wpUpdateAll(identities));
    };

    updateSingle = (identity, type, slug) => {
        const updateDetails = {
            identities: [identity],
            type,
            slug,
        };
        this.props.dispatch(
            WordpressUpdateActionV6.wordpressUpdate(updateDetails)
        );
    };
    render() {
        let allData = this.props.wordpressContainer.wordpress;

        allData = SiteBusiness.eliminateUpdateNotAvailable(allData);

        const data = allData.map((data, index) => {
            let themesTotalUpdates = 0;
            const themes = data.themes.map((theme) => {
                if (theme.update_version !== null) {
                    themesTotalUpdates = themesTotalUpdates + 1;
                }
                return (
                    <Row className="align-items-center mt-2">
                        <Col xs={4} lg="4">
                            <div className="update-desc">{theme.name}</div>
                        </Col>
                        <Col xs={3} lg="2">
                            <div className="update-desc">
                                {theme.current_version}
                            </div>
                        </Col>
                        <Col xs={5} lg="3">
                            <div className="update-desc">
                                {theme.update_version === null
                                    ? "Updated"
                                    : theme.update_version}
                            </div>
                        </Col>
                        <Col lg="1" className="text-right">
                            <div className="btn btn-link lock-img"></div>
                        </Col>
                        <Col lg="2" className="text-right">
                            <Button
                                className={`updatebtn ${
                                    this.props.wordpressUpdate.update_slug ===
                                        theme.slug ||
                                    this.props.wordpressUpdate.update_slug ===
                                        "theme_all" ||
                                    this.props.wpUpdateAll.loading
                                        ? "loading"
                                        : ""
                                }`}
                                disabled={
                                    theme.lock || theme.update_version === null
                                }
                                onClick={() =>
                                    this.updateSingle(
                                        data.identity,
                                        "theme",
                                        theme.slug
                                    )
                                }
                            >
                                Update
                            </Button>
                        </Col>
                    </Row>
                );
            });
            let pluginsTotalUpdates = 0;
            const plugins = data.plugins.map((plugin) => {
                if (plugin.update_version !== null) {
                    pluginsTotalUpdates = pluginsTotalUpdates + 1;
                }
                return (
                    <Row className="align-items-center mt-2">
                        <Col xs={4} lg="4">
                            <div className="update-desc">{plugin.name}</div>
                        </Col>
                        <Col xs={3} lg="2">
                            <div className="update-desc">
                                {plugin.current_version}
                            </div>
                        </Col>
                        <Col xs={5} lg="3">
                            <div className="update-desc">
                                {plugin.update_version === null
                                    ? "Updated"
                                    : plugin.update_version}
                            </div>
                        </Col>
                        <Col lg="1" className="text-right">
                            <div className="btn btn-link lock-img"></div>
                        </Col>
                        <Col lg="2" className="text-right">
                            <Button
                                className={`updatebtn ${
                                    this.props.wordpressUpdate.update_slug ===
                                        plugin.slug ||
                                    this.props.wordpressUpdate.update_slug ===
                                        "plugin_all" ||
                                    this.props.wpUpdateAll.loading
                                        ? "loading"
                                        : ""
                                }`}
                                disabled={
                                    plugin.lock ||
                                    plugin.update_version === null
                                }
                                onClick={() =>
                                    this.updateSingle(
                                        data.identity,
                                        "plugin",
                                        plugin.slug
                                    )
                                }
                            >
                                Update
                            </Button>
                        </Col>
                    </Row>
                );
            });
            let coreUpdates = 0;
            if (data.core !== null) {
                if (data.core.update_version !== null) {
                    coreUpdates = coreUpdates + 1;
                }
            }
            return (
                <Card>
                    <Card.Header className="update-header">
                        {/* <Row></Row> */}
                        <Row>
                            <Col md={7}>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    className="btn-block text-left"
                                    eventKey={index + 10}
                                >
                                    {data.domain}

                                    <Link
                                        className="ml-1 update-domain"
                                        to={"sites/" + data.domain}
                                    >
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                        />
                                    </Link>
                                </Accordion.Toggle>
                            </Col>
                            <Col md={5}>
                                <div className="update-icon-wrapper">
                                    <div
                                        className="update-image"
                                        title="Plugins Updates"
                                    >
                                        <ReactSVG
                                            src={`${Configs.public_url}/assets/img/WordPress/wp-plugin.svg`}
                                            alt="gauge"
                                            className="submenu-img updateall-plugin-icon"
                                        />

                                        <p className="text-white decoration-none">
                                            {pluginsTotalUpdates}
                                        </p>
                                    </div>
                                    <div
                                        className="update-image"
                                        title="Themes Updates"
                                    >
                                        <ReactSVG
                                            src={`${Configs.public_url}/assets/img/WordPress/wp-theme.svg`}
                                            alt="gauge"
                                            className="submenu-img updateall-theme-icon"
                                        />

                                        <p className="text-white decoration-none">
                                            {themesTotalUpdates}
                                        </p>
                                    </div>
                                    <div
                                        className="update-image"
                                        title="Wordpress Updates"
                                    >
                                        <ReactSVG
                                            src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                            alt="gauge"
                                            className="submenu-img updateall-wp-icon"
                                        />
                                        <p className="text-white decoration-none">
                                            {coreUpdates}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index + 10}>
                        <React.Fragment>
                            <Card.Body>
                                <Row>
                                    <Col xs={8} lg="8">
                                        <div className="page-header">
                                            WordPress Core
                                        </div>
                                    </Col>
                                    <Col
                                        xs={4}
                                        lg="4"
                                        className="text-right pt-4"
                                    >
                                        <Link
                                            className="update-all"
                                            onClick={() =>
                                                this.updateSingle(
                                                    data.identity,
                                                    "core",
                                                    "core"
                                                )
                                            }
                                        >
                                            Update All
                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="4 col-4">
                                        <div className="update-title d-none d-sm-block">
                                            Wordpress Core
                                        </div>
                                    </Col>
                                    <Col lg="2 col-3">
                                        <div className="update-title">
                                            Version
                                        </div>
                                    </Col>
                                    <Col lg="3 col-5">
                                        <div className="update-title">
                                            Latest Version
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="align-items-center mt-2">
                                    <Col xs={4} lg="4">
                                        <div className="update-desc">
                                            {data.core ? data.core.name : ""}
                                        </div>
                                    </Col>
                                    <Col xs={3} lg="2">
                                        <div className="update-desc">
                                            {data.core
                                                ? data.core.current_version
                                                : ""}
                                        </div>
                                    </Col>
                                    <Col xs={5} lg="3">
                                        <div className="update-desc">
                                            {data.core
                                                ? data.core.update_version
                                                    ? data.core.update_version
                                                    : "Updated"
                                                : "Updated"}
                                        </div>
                                    </Col>
                                    <Col lg="1" className="text-right">
                                        <div className="btn btn-link lock-img"></div>
                                    </Col>
                                    <Col lg="2" className="text-right">
                                        {data.core ? (
                                            <Button
                                                className={`updatebtn ${
                                                    this.props.wordpressUpdate
                                                        .update_slug ===
                                                        data.core.slug ||
                                                    this.props.wordpressUpdate
                                                        .update_slug ===
                                                        "core" ||
                                                    this.props.wpUpdateAll
                                                        .loading
                                                        ? "loading"
                                                        : ""
                                                }`}
                                                disabled={
                                                    data.core.lock ||
                                                    data.core.update_version ===
                                                        null
                                                }
                                                onClick={() =>
                                                    this.updateSingle(
                                                        data.identity,
                                                        "core",
                                                        data.core.slug
                                                    )
                                                }
                                            >
                                                Update
                                            </Button>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <Row>
                                    <Col lg="8 col-8">
                                        <div className="page-header">
                                            WordPress Themes
                                        </div>
                                    </Col>
                                    <Col
                                        lg="4 col-4"
                                        className="text-right pt-4"
                                    >
                                        <Link
                                            className="update-all"
                                            onClick={() =>
                                                this.updateSingle(
                                                    data.identity,
                                                    "theme",
                                                    "theme_all"
                                                )
                                            }
                                        >
                                            Update All
                                        </Link>
                                    </Col>
                                </Row>
                                <div className="">
                                    <Row>
                                        <Col lg="4 col-4">
                                            <div className="update-title">
                                                Theme Name
                                            </div>
                                        </Col>
                                        <Col lg="2 col-3">
                                            <div className="update-title">
                                                Version
                                            </div>
                                        </Col>
                                        <Col lg="3 col-5">
                                            <div className="update-title">
                                                Latest Version
                                            </div>
                                        </Col>
                                        <Col
                                            lg="2 col-12"
                                            className="text-right"
                                        ></Col>
                                    </Row>
                                    {themes}
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <Row>
                                    <Col lg="8 col-8">
                                        <div className="page-header">
                                            WordPress Plugins
                                        </div>
                                    </Col>
                                    <Col
                                        lg="4 col-4"
                                        className="text-right pt-4"
                                    >
                                        <Link
                                            className="update-all"
                                            onClick={() =>
                                                this.updateSingle(
                                                    data.identity,
                                                    "plugin",
                                                    "plugin_all"
                                                )
                                            }
                                        >
                                            Update All
                                        </Link>
                                    </Col>
                                </Row>
                                <div className="">
                                    <Row>
                                        <Col lg="4 col-4">
                                            <div className="update-title">
                                                Plugin Name
                                            </div>
                                        </Col>
                                        <Col lg="2 col-3">
                                            <div className="update-title">
                                                Version
                                            </div>
                                        </Col>
                                        <Col lg="3 col-5">
                                            <div className="update-title">
                                                Latest Version
                                            </div>
                                        </Col>
                                        <Col
                                            lg="2 col-12"
                                            className="text-right"
                                        ></Col>
                                    </Row>
                                    {plugins}
                                </div>
                            </Card.Body>
                        </React.Fragment>
                    </Accordion.Collapse>
                </Card>
            );
        });

        return (
            <React.Fragment>
                <TemplateMain>
                    <UpdateSubMenuComponent active="updateall" />

                    <div className="site-allupdate-page">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="text-right">
                                    {allData.length > 0 ? (
                                        <Button
                                            className={`updatebtn header-update-all-btn  ${
                                                this.props.wpUpdateAll.loading
                                                    ? "loading"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                this.updateAllContainers();
                                            }}
                                        >
                                            Update All
                                        </Button>
                                    ) : null}
                                </div>

                                <div className="site-update-left ">
                                    {" "}
                                    {allData.length > 0 ? (
                                        <Accordion defaultActiveKey={10}>
                                            {data}
                                        </Accordion>
                                    ) : (
                                        NoData.available(
                                            allData,
                                            this.props.wordpressContainer
                                                .loading
                                        )
                                    )}
                                </div>
                                {/* <div className="site-update-right overlay-grey">
                                <div className="box">
                                    <Row>
                                        <Col lg="12">
                                            <div className="page-header">
                                                Timeline
                                            </div>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Updated to version 2.2.2 on
                                                    22/04/2020
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        wordpressContainer: state.site.wordpress.container,
        wpUpdateAll: state.siteV6.wordpressV6.updateAll,
        wordpressUpdate: state.siteV6.wordpressV6.update,
    };
}

export default connect(mapStateToProps)(SiteAllUpdateComponent);
