import React from 'react';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExternalLinkAlt,
    faArrowCircleDown,
} from '@fortawesome/fontawesome-free-solid';
import { ReactSVG } from 'react-svg';
import Configs from 'Configs';
import 'Assets/css/Responsive/SiteCoreUpdate.css';
import 'Assets/css/Responsive/SiteUpdateTheme.css';

const updateData = (name, type, data, slug, quickLogin, updateFunc) => {
    if (data) {
        const list = data.map((wpdata, key) => {
            return (
                <Card className="update-all-business-main">
                    <Card.Header>
                        <Row className="align-items-center update-inner">
                            <Col xs={4} md={3} className="update-desc">
                                {wpdata.slug === 'core'
                                    ? 'Wordpress Core'
                                    : wpdata.name}
                            </Col>
                            <Col xs={4} md={3} className="update-desc">
                                {wpdata.update_version}
                            </Col>
                            <Col xs={4} md={2} className="update-desc">
                                {wpdata.sites.length}
                            </Col>
                            <Col md={4} className="text-center update-all-col">
                                <button
                                    type="submit"
                                    className={`btn updatebtn ${
                                        slug.update_slug === wpdata.slug
                                            ? 'loading'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        updateFunc(
                                            type,
                                            wpdata.slug,
                                            wpdata.sites.map(
                                                (site) => site.identity
                                            )
                                        )
                                    }>
                                    Update All
                                </button>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey={key + 1}
                                    className="float-right arrow-res">
                                    <FontAwesomeIcon icon={faArrowCircleDown} />
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey={key + 1}>
                        <Card.Body>
                            <Row>
                                <Col xs={4} md={4} className="update-title ">
                                    Site Name
                                </Col>
                                <Col xs={5} md={6} className="update-title ">
                                    Domain
                                </Col>
                                <Col
                                    xs={3}
                                    md={2}
                                    className="update-title text-center">
                                    Login
                                </Col>
                            </Row>

                            {wpdata.sites.map((site) => (
                                <Row className="align-items-center mt-3 site-core-inner-section">
                                    <Col xs={4} md={4} className="site-name">
                                        <a
                                            target="_blank"
                                            className="domain-link"
                                            rel="noopener noreferrer"
                                            href={
                                                '/sites/' + site.primary_domain
                                            }>
                                            {site.name}
                                        </a>
                                    </Col>
                                    <Col xs={6} md={6} className="site-domain">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="domain-link"
                                            href={
                                                'https://' + site.primary_domain
                                            }>
                                            {site.primary_domain}
                                            <FontAwesomeIcon
                                                icon={faExternalLinkAlt}
                                                className="ml-1"
                                            />
                                        </a>
                                    </Col>
                                    <Col xs={2} md={2} className="text-center">
                                        <ReactSVG
                                            title="Login"
                                            src={`${Configs.public_url}/assets/img/WordPress/wp-icon.svg`}
                                            alt="wordpresswhite"
                                            className="update-all-business-wp-icon"
                                            data-identity={site.identity}
                                            onClick={() =>
                                                quickLogin(site.identity)
                                            }
                                        />
                                    </Col>
                                </Row>
                                // <tr>
                                //     <td>
                                //         <a
                                //             target="_blank"
                                //             className="domain-link"
                                //             rel="noopener noreferrer"
                                //             href={
                                //                 "/sites/" +
                                //                 site.primary_domain
                                //             }
                                //         >
                                //             {site.name}
                                //         </a>
                                //     </td>
                                //     <td>
                                //         <a
                                //             target="_blank"
                                //             rel="noopener noreferrer"
                                //             className="domain-link"
                                //             href={
                                //                 "https://" +
                                //                 site.primary_domain
                                //             }
                                //         >
                                //             {site.primary_domain}
                                //             <FontAwesomeIcon
                                //                 icon={faExternalLinkAlt}
                                //                 className="ml-1"
                                //             />
                                //         </a>
                                //     </td>
                                //     <td className="text-center">
                                //         <img
                                //             src="/assets/img/Wordpress.png"
                                //             alt="wordpresswhite"
                                //             className="site-wordpress"
                                //             data-identity={
                                //                 site.identity
                                //             }
                                //             onClick={quickLogin}
                                //         />
                                //     </td>
                                // </tr>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
        });

        return (
            <React.Fragment>
                <Card className="site-card-header">
                    <Card.Header>
                        <Row className="align-items-center">
                            <Col xs={4} md={3} className="title">
                                {name}
                            </Col>
                            <Col xs={4} md={3} className="title">
                                Latest Version
                            </Col>
                            <Col xs={4} md={2} className="title">
                                Total Sites
                            </Col>
                            <Col md={4}></Col>
                        </Row>
                    </Card.Header>
                </Card>
                <Accordion>{list}</Accordion>
            </React.Fragment>
        );
    }
};

const UpdateAllBusiness = {
    updateData,
};

export default UpdateAllBusiness;
