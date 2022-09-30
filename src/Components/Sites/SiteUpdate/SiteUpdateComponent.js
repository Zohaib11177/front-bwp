import React, { Component } from "react";
import TemplateMain from "Templates/TemplateMain";
import "Assets/css/sitedetail.css";
import "Assets/css/siteupdate.css";
import TemplateSideRight from "Templates/TemplateSidebarRight";
import SiteSubMenuComponent from "../Ui/SiteSubMenuComponent";
import { connect } from "react-redux";
import UpdateBoxComponent from "Components/Sites/SiteUpdate/UpdateBoxComponent";
import TimelineComponent from "Components/Wordpress/TimelineComponent";
// import SiteAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import SiteDashboardMessageComponent from "Components/Sites/SiteDashboard/SiteDashboardMessageComponent";
import "Assets/css/Responsive/SiteDetailUpdate.css";

class SiteUpdateComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.props.dispatch(
    //         SiteAction.getSiteDetail(this.props.match.params.host)
    //     );
    // }

    render() {
        const { wordpress, themes, plugins, timeline } =
            this.props.wordpressList;
        const core = [
            {
                name: "core",
                current_version: wordpress.current_version,
                update_version: wordpress.update_version,
                lock: wordpress.lock,
                slug: "core",
            },
        ];
        const apiCallCondition =
            themes.length !== 0 && plugins.length !== 0 ? false : true;
        const { identity } = this.props.details.site_detail.container;
        const { host } = this.props.match.params;
        const lockLoading = this.props.lockLoading;

        const { parent } = this.props.details.site_detail;

        return (
            <React.Fragment>
                <SiteDashboardMessageComponent
                    siteDetail={this.props.details.site_detail}
                />
                <TemplateMain>
                    <SiteSubMenuComponent
                        identity={host}
                        active="update"
                        iden={parent ? parent.identity : null}
                    />
                    <div className="site-update-page">
                        <TemplateSideRight>
                            <div className="site-update-left">
                                {identity ? (
                                    <React.Fragment>
                                        <UpdateBoxComponent
                                            dis={this.props.dispatch}
                                            identity={identity}
                                            host={host}
                                            list={core}
                                            title={"core"}
                                            mainSlug={"core"}
                                            updateSlug={
                                                this.props.wordpressUpdate
                                                    .update_slug
                                            }
                                            apiCallCondition={apiCallCondition}
                                            lockLoading={lockLoading}
                                        />
                                        <UpdateBoxComponent
                                            dis={this.props.dispatch}
                                            identity={identity}
                                            host={host}
                                            list={themes}
                                            title={"theme"}
                                            mainSlug={"theme_all"}
                                            updateSlug={
                                                this.props.wordpressUpdate
                                                    .update_slug
                                            }
                                            lockLoading={lockLoading}
                                        />

                                        <UpdateBoxComponent
                                            dis={this.props.dispatch}
                                            identity={identity}
                                            host={host}
                                            list={plugins}
                                            title={"plugin"}
                                            mainSlug={"plugin_all"}
                                            updateSlug={
                                                this.props.wordpressUpdate
                                                    .update_slug
                                            }
                                            lockLoading={lockLoading}
                                        />
                                    </React.Fragment>
                                ) : (
                                    ""
                                )}
                            </div>

                            <div className="site-update-right">
                                {identity ? (
                                    <TimelineComponent
                                        timeline={timeline}
                                        identity={identity}
                                    />
                                ) : (
                                    ""
                                )}
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
        wordpressList: state.site.wordpress.list,
        wordpressUpdate: state.site.wordpress.update,
        lockLoading: state.site.wordpress.lock.loading,
    };
}

export default connect(mapStateToProps)(SiteUpdateComponent);
