import React, { Component } from 'react';
import TemplateMain from 'Templates/TemplateMain';
import SiteDetailComponent from 'Components/Sites/SiteDashboard/SiteDetail/SiteDetailComponent';
import SiteSubMenuComponent from '../Ui/SiteSubMenuComponent';
// import SiteDetailAction from "Redux/V1/Sites/Detail/SiteDetailAction";
import { connect } from 'react-redux';
import 'Assets/css/sitebackup.css';
import SiteDashboardMessageComponent from 'Components/Sites/SiteDashboard/SiteDashboardMessageComponent';
class SiteDashboard extends Component {
    // componentDidMount = () => {
    //     const host = this.props.match.params.host;
    //     this.props.dispatch(SiteDetailAction.getSiteDetail(host));
    // };
    render() {
        const { host } = this.props.match.params;
        const { parent } = this.props.siteDetail;

        return (
            <React.Fragment>
                {' '}
                <SiteDashboardMessageComponent
                    siteDetail={this.props.siteDetail}
                />
                <TemplateMain>
                    {' '}
                    <SiteSubMenuComponent
                        identity={host}
                        active="dashboard"
                        iden={parent ? parent.identity : null}
                    />
                    <SiteDetailComponent host={host} />
                </TemplateMain>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        siteDetail: state.SiteDetailReducer.site_detail,
    };
}

export default connect(mapStateToProps)(SiteDashboard);
