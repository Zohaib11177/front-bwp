import React, { Component } from "react";
import "Assets/css/news.css";
import Configs from "Configs";
import { Row, Col, Carousel } from "react-bootstrap";
import "Assets/css/Responsive/Auth.css";

class NewsComponent extends Component {
    render() {
        const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
        return (
            <React.Fragment>
                <Row className="news-slider justify-content-center align-items-center h-100 ">
                    <Col md={2}> </Col>

                    <Col md={8}>
                        <div className=" news-section ">
                            <div className="news-title">
                               {!portal_settings?.name ? <p>
                                    BionicWP enables you to build awesome
                                    WordPress Digital Experiences backed by the
                                    best 24/7 support team in the industry.
                                </p> : <p>Welcome to {portal_settings?.name}</p>}
                            </div>
                            <div>
                                <Carousel className="slider-image">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 "
                                            src={`${Configs.public_url}/assets/img/General/Website-setup-amico.svg`}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    {/* <Carousel.Item>
									<img
										className="d-block w-100"
										src="/assets/img/news.png"
										alt="Third slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="/assets/img/news.png"
										alt="Third slide"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="/assets/img/news.png"
										alt="Third slide"
									/>
								</Carousel.Item> */}
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col md={2}> </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default NewsComponent;
