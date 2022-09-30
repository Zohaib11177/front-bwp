import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RegistrationTemplateComponent from 'Components/Auths/RegistrationTemplateComponent';
import Dashboard from 'Components/Dashboards/DashboardComponent';
// import SiteDashboard from 'Components/Sites/SiteDashboard/SiteDashboardComponent';
import LoginTemplateComponent from 'Components/Auths/LoginTemplateComponent';
// import Sites from 'Components/Sites/SiteComponent';
import SiteTileComponent from 'Components/Sites/SiteTileComponent';
import SiteBackupComponent from 'Components/Sites/SiteBackupComponent';
import SiteCreateComponent from 'Components/Site/SiteCreate/SiteCreateComponent';
import ProfileComponent from 'Components/Profiles/ProfileComponent';
import BillingComponent from 'Components/Billings/BillingComponent';
import SiteUpdateComponent from 'Components/Sites/SiteUpdate/SiteUpdateComponent';
import SiteAddonComponent from 'Components/Sites/Addon/SiteAddonComponent';
import InvoiceComponent from 'Components/Billings/InvoiceComponent';
import SiteOperationComponent from 'Components/Sites/SiteOperation/SiteOperationComponent';
import Error404Component from 'Components/404/Error404Component';
import Error403Component from 'Components/403/Error403Component';
import { ToastContainer } from 'react-toastify';
import SiteAllUpdateComponent from 'Components/SiteAllUpdates/SiteAllUpdatesComponent';
import ForgotPassword from 'Components/Auths/ForgotPasswordComponent';
import PasswordReset from 'Components/Auths/PasswordResetComponent';
import AffiliateComponent from 'Components/Affiliate/AffiliateComponent';
import SiteDomainComponent from 'Components/Sites/SiteDomainComponent';
import WhiteLabelComponent from 'Components/Settings/WhiteLabelComponent/WhiteLabelComponent';
import SettingComponent from 'Components/Settings/SettingComponent';
import SiteCoreUpdateComponent from 'Components/SiteAllUpdates/SiteCoreUpdateComponent';
import SiteDetail from 'Components/V3/Sites/SiteDetail';
import SiteDetailV6 from 'Components/V6/Sites/SiteDetailV6';
// import SiteListComponent from "Components/V3/Sites/SiteListComponent";
import SiteThemeUpdateComponent from 'Components/SiteAllUpdates/SiteThemeUpdateComponent';
import SitePluginUpdateComponent from 'Components/SiteAllUpdates/SitePluginUpdateComponent';
import Header from 'Components/Header';
import StagingRenewalComponent from 'Components/Staging/StagingRenewalComponent';
import TimelineListComponent from 'Components/Wordpress/TimelineListComponent';
import AccountVerificationComponent from 'Components/Auths/AccountVerificationComponent';
import NotificationListComponent from 'Components/Notification/NotificationListComponent';
import StagingLogsComponent from 'Components/Staging/StagingLogsComponent';
import SiteCreateComponentV3 from 'Components/V3/Site/SiteCreate/SiteCreateComponentV3';
import SiteListComponentV6 from 'Components/V6/SiteList/SiteListComponentV6';

class Main extends Component {
    render() {
        const loggedIn = this.props.Auth.isAuthenticated;
        const PrivateRoute = ({ component: Component, ...rest }) => {
            return (
                <Route
                    {...rest}
                    render={(props) =>
                        loggedIn ? (
                            <Component {...props} />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: props.location },
                                }}
                            />
                        )
                    }
                />
            );
        };
        const GuestRoute = ({ component: Component, ...rest }) => {
            return (
                <Route
                    {...rest}
                    render={(props) =>
                        !loggedIn ? (
                            <Component {...props} />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/dashboard',
                                    state: { from: props.location },
                                }}
                            />
                        )
                    }
                />
            );
        };
        return (
            <React.Fragment>
                {loggedIn ? <Header /> : ''}

                <Switch>
                    <GuestRoute
                        exact
                        path="/register/:promocode"
                        component={RegistrationTemplateComponent}
                    />
                    <GuestRoute
                        path="/register"
                        component={RegistrationTemplateComponent}
                    />
                    <GuestRoute
                        path="/forgotpassword"
                        component={ForgotPassword}
                    />
                    <GuestRoute
                        path="/create-password/:token"
                        component={PasswordReset}
                    />
                    <PrivateRoute
                        path="/dashboard/:token"
                        component={Dashboard}
                    />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    {/* <PrivateRoute exact path="/sites" component={Sites} /> */}
                    <PrivateRoute
                        exact
                        path="/sites/launch"
                        component={SiteCreateComponentV3}
                    />
                    <PrivateRoute
                        exact
                        path="/sites/launch-old"
                        component={SiteCreateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/sites"
                        component={SiteListComponentV6}
                    />
                    <PrivateRoute
                        exact
                        path="/sites/launch/:migration"
                        component={SiteCreateComponent}
                    />
        
                    <PrivateRoute
                        exact
                        path="/sites/v2/:host"
                        component={SiteDetail}
                    />
                    <PrivateRoute
                        exact
                        path="/sites/:host"
                        component={SiteDetailV6}
                    />
                    <PrivateRoute
                        exact
                        path="/sites-old/:host"
                        component={SiteDetail}
                    />
                    <PrivateRoute
                        exact
                        path="/sites/backups/:host"
                        component={SiteBackupComponent}
                    />

                    <PrivateRoute
                        exact
                        path="/sites/operations/:host"
                        component={SiteOperationComponent}
                    />

                    <PrivateRoute
                        exact
                        path="/sitestile"
                        component={SiteTileComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/profile"
                        component={() => (
                            <ProfileComponent user={this.props.Auth.user} />
                        )}
                    />

                    <PrivateRoute
                        exact
                        path="/billing"
                        component={BillingComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/invoice/:id"
                        component={(match) => (
                            <InvoiceComponent
                                dis={this.props.dispatch}
                                invoicePayment={this.props.invoice_payment}
                                invoiceId={match.match.params.id}
                                wallet={this.props.Auth.wallet}
                            />
                        )}
                    />
                    <PrivateRoute
                        exact
                        path="/sites/updates/:host"
                        component={SiteUpdateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/sites/addons/:host"
                        component={SiteAddonComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/sites/domains/:host"
                        component={SiteDomainComponent}
                    />
                    <GuestRoute
                        path="/login"
                        component={LoginTemplateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={() => (
                            <Dashboard user={this.props.Auth.user} />
                        )}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={() => (
                            <Dashboard user={this.props.Auth.user} />
                        )}
                    />
                    <PrivateRoute
                        exact
                        path="/updates"
                        component={SiteAllUpdateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/updates/core"
                        component={SiteCoreUpdateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/updates/theme"
                        component={SiteThemeUpdateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/updates/plugin"
                        component={SitePluginUpdateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/404"
                        component={Error404Component}
                    />

                    <PrivateRoute path="/403" component={Error403Component} />
                    <PrivateRoute
                        path="/affiliate"
                        component={AffiliateComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/white-label"
                        component={WhiteLabelComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/settings"
                        component={SettingComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/site/renewal"
                        component={StagingRenewalComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/timelines/:identity"
                        component={TimelineListComponent}
                    />
                    <Route
                        exact
                        path="/user-verification/:token"
                        component={AccountVerificationComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/notifications"
                        component={NotificationListComponent}
                    />
                    <PrivateRoute
                        exact
                        path="/site/staging/logs/:identity"
                        component={StagingLogsComponent}
                    />
                    <Redirect to="/404" />
                </Switch>
                <ToastContainer />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        Auth: state.login,
        invoice_payment: state.invoicePayment,
    };
}

export default connect(mapStateToProps)(Main);
