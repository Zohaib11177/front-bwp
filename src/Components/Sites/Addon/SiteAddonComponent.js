import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import TemplateMain from 'Templates/TemplateMain';
import 'Assets/css/sitedetail.css';
import 'Assets/css/siteaddon.css';
import TemplateSideRight from 'Templates/TemplateSidebarRight';
import SiteSubMenuComponent from '../Ui/SiteSubMenuComponent';
import SiteCdnComponent from 'Components/Sites/SiteCdn/SiteCdnComponent';
// import SiteAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import SiteNitroComponent from 'Components/Sites/SiteNitro/SiteNitroComponent';
// import Addon from "Components/Sites/Addon/AddonComponent";
import { connect } from 'react-redux';
import StagingBusiness from 'Businesses/StagingBusiness';
import AddonComponent from 'Components/Sites/Addon/AddonComponent';
import 'Assets/css/Responsive/SiteDetailAddons.css';
import SiteDashboardMessageComponent from 'Components/Sites/SiteDashboard/SiteDashboardMessageComponent';
class SiteAddonComponent extends Component {
    componentDidMount() {
        // this.props.dispatch(
        //     SiteAction.getSiteDetail(this.props.match.params.host)
        // );
    }
    render() {
        const siteType = this.props.details.site_detail.site_type;
        const { host } = this.props.match.params;
        const { identity, cloudProvider } =
            this.props.details.site_detail.container;
        const {
            cdnDetail,
            cdnEnable,
            cdnDisable,
            cdnUpdate,
            nitroDetail,
            nitroEnable,
            nitroDisable,
            dispatch,
        } = this.props;
        StagingBusiness.stagingRedirect(siteType);
        return (
            <React.Fragment>
                {' '}
                <SiteDashboardMessageComponent
                    siteDetail={this.props.details.site_detail}
                />
                <TemplateMain>
                    <SiteSubMenuComponent active="addons" identity={host} />

                    <div className="site-addon-page">
                        <TemplateSideRight>
                            <div className="site-update-left">
                                {identity ? (
                                    <AddonComponent
                                        identity={identity}
                                        dis={this.props.dispatch}
                                        list={this.props.addonList}
                                    />
                                ) : (
                                    ''
                                )}

                                {identity && cloudProvider === 'GCP' ? (
                                    <SiteNitroComponent
                                        dispatch={dispatch}
                                        cdnDetail={cdnDetail}
                                        cdnEnable={cdnEnable}
                                        identity={identity}
                                        nitroDetail={nitroDetail}
                                        nitroEnable={nitroEnable}
                                        nitroDisable={nitroDisable}
                                    />
                                ) : (
                                    ''
                                )}
                                {identity ? (
                                    <SiteCdnComponent
                                        dispatch={dispatch}
                                        identity={identity}
                                        cdnDetail={cdnDetail}
                                        cdnEnable={cdnEnable}
                                        cdnDisable={cdnDisable}
                                        cdnUpdate={cdnUpdate}
                                        nitroDetail={nitroDetail}
                                        nitroEnable={nitroEnable}
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
        addonList: state.site.addon.list,
        cdnDetail: state.site.addon.cdnDetail,
        cdnEnable: state.siteV2.addonV2.cdnEnable,
        cdnDisable: state.siteV2.addonV2.cdnDisable,
        cdnUpdate: state.siteV2.addonV2.cdnUpdate,
        nitroDetail: state.site.addon.nitroDetail,
        nitroEnable: state.site.addon.nitroEnable,
        nitroDisable: state.site.addon.nitroDisable,
    };
}
export default connect(mapStateToProps)(SiteAddonComponent);
