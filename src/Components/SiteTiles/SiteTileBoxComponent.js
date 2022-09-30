import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Configs from "Configs";
class SiteTileBoxComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="box">
                    <div className="sitetile-box">
                        <Row>
                            <Col sm={10} className="sitetile-screenshot">
                                <img
                                    src={`${Configs.public_url}/assets/img/site-image-tile.svg`}
                                    alt="siteimage"
                                />
                                <div className="sitetile-url">Demo Site 0</div>
                            </Col>
                            <Col sm={2} className="sitetile-screenshot-right">
                                <img
                                    src={`${Configs.public_url}/assets/img/wordpress-black.png`}
                                    alt="wordpress-gray"
                                />
                            </Col>
                        </Row>
                    </div>
                    <hr />
                    <div className="sitetile-box">
                        <Row>
                            <Col sm={4} className="">
                                <div className="sitetiledetais">
                                    <div className="sitetiledetais-title">
                                        Domain
                                    </div>
                                    <div className="sitetiledetais-desc">
                                        DomainName
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4} className="">
                                <div className="sitetiledetais">
                                    <div className="sitetiledetais-title">
                                        Ip Address
                                    </div>
                                    <div className="sitetiledetais-desc">
                                        192.168.0.1
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4} className="">
                                <div className="sitetiledetais">
                                    <div className="sitetiledetais-title">
                                        Wp Version
                                    </div>
                                    <div className="sitetiledetais-desc blue-color">
                                        1.0
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} className="">
                                <div className="sitetiledetais">
                                    <div className="sitetiledetais-title">
                                        # of Updates
                                    </div>
                                    <div className="sitetiledetais-desc">
                                        13
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4} className="">
                                <div className="sitetiledetais">
                                    <div className="sitetiledetais-title">
                                        Date of Last Backup
                                    </div>
                                    <div className="sitetiledetais-desc">
                                        02/03/2020
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4} className=""></Col>
                        </Row>
                        <Row>
                            <Col sm={12} className="">
                                <div className="sitetiledetais">
                                    <div className="sitetiledetais-title">
                                        Tags
                                    </div>
                                    <div className="sitetiledetais-desc">
                                        <div className="tags">
                                            <img
                                                className="tag-svg"
                                                alt="tag"
                                                src={`${Configs.public_url}/assets/img/tag.svg`}
                                            />
                                            tags
                                        </div>
                                        <div className="tags">
                                            <img
                                                className="tag-svg"
                                                alt="tag"
                                                src={`${Configs.public_url}/assets/img/tag.svg`}
                                            />
                                            tags
                                        </div>
                                        <div className="tags">
                                            <img
                                                className="tag-svg"
                                                alt="tag"
                                                src={`${Configs.public_url}/assets/img/tag.svg`}
                                            />
                                            tags
                                        </div>
                                        <div className="tags">
                                            <img
                                                className="tag-svg"
                                                alt="tag"
                                                src={`${Configs.public_url}/assets/img/tag.svg`}
                                            />
                                            tags
                                        </div>
                                        <div className="tags">
                                            <img
                                                className="tag-svg"
                                                alt="tag"
                                                src={`${Configs.public_url}/assets/img/tag.svg`}
                                            />
                                            tags
                                        </div>
                                        <div className="tags">
                                            <img
                                                className="tag-svg"
                                                alt="tag"
                                                src={`${Configs.public_url}/assets/img/tag.svg`}
                                            />
                                            tags
                                        </div>
                                        <div className="tags">
                                            <img
                                                className="tag-svg"
                                                alt="tag"
                                                src={`${Configs.public_url}/assets/img/tag.svg`}
                                            />
                                            tags
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default SiteTileBoxComponent;
