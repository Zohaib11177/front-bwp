import React, { Component } from "react";
// import { Row, Col, ListGroup } from "react-bootstrap";
import TemplateMain from "Templates/TemplateMain";
// import TemplateSideRight from "Templates/TemplateSidebarRight";
import { connect } from "react-redux";
import WordpressContainerActionV1 from "Redux/V1/Sites/Wordpress/WordpressContainerV1/WordpressContainerActionV1";
import "Assets/css/siteallupdate.css";
import WordpressLoginActionV3 from "Redux/V3/Sites/Features/WordpressLogin/WordpressLoginActionV3";
import WordpressUpdateActionV6 from "Redux/V6/Sites/Wordpress/WordpressUpdate/WordpressUpdateActionV6";
import UpdateSubMenuComponent from "Components/SiteAllUpdates/Ui/UpdateSubMenuComponentResponsive";
import NoData from "Helpers/NoDataHelper";
import UpdateAllBusiness from "Businesses/UpdateAll/UpdateAllBusiness";
import Pagination from "Components/Pagination/PaginationComponent";
import NoDataHelper from "Helpers/NoDataHelper";
import "Assets/css/Responsive/SitePluginUpdate.css";

class SitePluginUpdateComponent extends Component {
    componentDidMount() {
        this.props.dispatch(
            WordpressContainerActionV1.wordpressContainer("plugin")
        );
    }
    updateAllPlugin = (type, slug, identities) => {
        const updateDetails = {
            type,
            slug,
            identities,
        };
        this.props.dispatch(
            WordpressUpdateActionV6.wordpressUpdate(updateDetails)
        );
    };
    quickLogin = (data) => {
        const identity = data;
        this.props.dispatch(WordpressLoginActionV3.wordpressLogin(identity));
    };

    render() {
        let allData = this.props.wordpressContainer.wordpress;
        let pagination = this.props.wordpressContainer.pagination;

        return (
            <React.Fragment>
                <TemplateMain>
                    <UpdateSubMenuComponent active="plugin" />

                    <div className="site-allupdate-page site-plugin-update">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="site-update-left ">
                                    {allData.length > 0
                                        ? UpdateAllBusiness.updateData(
                                              "Plugin Name",
                                              "plugin",
                                              allData,
                                              this.props.wordpressUpdate,
                                              this.quickLogin,
                                              this.updateAllPlugin
                                          )
                                        : NoData.available(
                                              allData,
                                              this.props.wordpressContainer
                                                  .loading
                                          )}

                                    {NoDataHelper.available(allData) ? (
                                        ""
                                    ) : (
                                        <Pagination
                                            title={"Plugins"}
                                            perPage={pagination.per_page}
                                            totalPages={pagination.total_pages}
                                            currentPage={
                                                pagination.current_page
                                            }
                                        />
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
        wordpressContainer: state.site.wordpress.containerV1,
        wordpressUpdate: state.siteV6.wordpressV6.update,
    };
}

export default connect(mapStateToProps)(SitePluginUpdateComponent);
