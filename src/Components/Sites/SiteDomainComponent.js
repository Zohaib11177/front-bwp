import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import TemplateMain from 'Templates/TemplateMain';
import 'Assets/css/sitedetail.css';
import 'Assets/css/siteaddon.css';
import TemplateSideRight from 'Templates/TemplateSidebarRight';
import SiteSubMenuComponent from './Ui/SiteSubMenuComponent';
// import SiteAction from "Redux/V1/Sites/Detail/SiteDetailAction";
// import SslComponent from 'Components/Sites/Ssl/SslComponent';
import DomainComponent from './Domain/DomainComponent';
import StagingBusiness from 'Businesses/StagingBusiness';
import { connect } from 'react-redux';
import SiteDashboardMessageComponent from 'Components/Sites/SiteDashboard/SiteDashboardMessageComponent';
import SslComponent from './Ssl/SslComponent';

class SiteDomainComponent extends Component {
    componentDidMount() {
        // this.props.dispatch(
        //     SiteAction.getSiteDetail(this.props.match.params.host)
        // );
    }

    render() {
        const { siteType, container } = this.props.details.site_detail;
        StagingBusiness.stagingRedirect(siteType);
        return (
            <React.Fragment>
                {' '}
                <SiteDashboardMessageComponent
                    siteDetail={this.props.details.site_detail}
                />
                <TemplateMain
                    permissions={['domains_add']}
                    permissionNumber={1}
                    text={
                        'Please add your payment method to start adding domains to your account'
                    }>
                    <SiteSubMenuComponent
                        active="domains"
                        identity={this.props.match.params.host}
                        site={this.props.details.site_detail}
                    />

                    <div className="site-addon-page site-domain-page">
                        <TemplateSideRight>
                            <div className="site-update-left">
                                {this.props.details.site_detail.container
                                    .identity ? (
                                    <DomainComponent
                                        container={
                                            this.props.details.site_detail
                                                .container
                                        }
                                    />
                                ) : (
                                    ''
                                )}

                                {container.identity &&
                                (container.cloud_provider === 'GCP' ||
                                    container.cloud_provider === 'linode') ? (
                                    <SslComponent
                                        site={this.props.details.site_detail}
                                    />
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="site-update-right overlay-grey d-none">
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
export default connect(mapStateToProps)(SiteDomainComponent);
