import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import TemplateMain from 'Templates/TemplateMain';
import 'Assets/css/sitedetail.css';
import 'Assets/css/siteaddon.css';
import TemplateSideRight from 'Templates/TemplateSidebarRight';
import SiteSubMenuComponent from './Ui/SiteSubMenuComponent';
import SiteAction from 'Redux/V1/Sites/Detail/SiteDetailAction';
import SslComponent from 'Components/Sites/Ssl/SslComponent';
import DomainComponent from './Domain/DomainComponent';

import { connect } from 'react-redux';
class SiteAdvance extends Component {
    componentDidMount() {
        this.props.dispatch(
            SiteAction.getSiteDetail(this.props.match.params.host)
        );
    }
    render() {
        const { host } = this.props.match.params;
        const { identity } = this.props.details.site_detail.container;
        const siteDetail = this.props.details.site_detail;
        return (
            <React.Fragment>
                <TemplateMain>
                    <SiteSubMenuComponent active="domains" identity={host} />

                    <div className="site-addon-page">
                        <TemplateSideRight>
                            <div className="site-update-left">
                                {identity ? (
                                    <DomainComponent
                                        container={siteDetail.container}
                                    />
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="site-update-right overlay-grey">
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
                            </div>
                        </TemplateSideRight>
                    </div>
                </TemplateMain>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        details: state.SiteDetailReducer,
    };
}
export default connect(mapStateToProps)(SiteAdvance);
