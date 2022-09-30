import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import TemplateSideRight from "Templates/TemplateSidebarRight";
import TemplateMain from "Templates/TemplateMain";
import { connect } from "react-redux";
import SiteCreateAction from "Redux/V1/Sites/Site/Post/SitePostAction";
import CardListAction from "Redux/V1/Billing/Card/Get/CardGetAction";
import SiteLaunchValidation from "Validations/SiteLaunchValidation";
import SiteIdentityAction from "Redux/V1/Sites/Site/SiteIdentity/SiteIdentityAction";
import SiteCreateForm from "Components/Forms/SiteCreateForm";
import MigrationComponent from "Components/Site/SiteCreate/MigrationComponent";
import EnvironmentComponent from "Components/Site/SiteCreate/EnvironmentComponent";
import SiteAddonComponent from "Components/Site/SiteCreate/SiteAddonComponent";
import MigrationValidation from "Validations/MigrationValidation";
import SiteBusiness from "Businesses/SiteBusiness";
import "Assets/css/createsite.css";
import "Assets/css/form.css";
import ErrorBusiness from "Businesses/ErrorBusiness";
import AddCardModal from "Components/Billings/AddCardModal";
import SiteCreateMessageComponent from "Components/Site/SiteCreate/SiteCreateMessageComponent";

class SiteCreateComponent extends Component {
    state = {
        form: {
            addons: [],
            wp: {
                plan: 3,
            },
            card_id: null,
        },
        card_modal: false,
        env_status: 1,
    };

    /* Calling Site Identity Card List Api and Migration Open Function */
    componentDidMount = () => {
        this.props.dispatch(SiteIdentityAction.siteIdentity());
        this.props.dispatch(CardListAction.cardGet());
        this.migrationOpenFunction();
    };

    /* Site Launch Function After Validation Check */
    siteLaunchFunction = (e) => {
        e.preventDefault();
        if (this.state.env_status === 1) {
            SiteLaunchValidation.validate(this.state.form.wp, {
                abortEarly: false,
            })
                .then(() => {
                    this.props.dispatch(
                        SiteCreateAction.sitePost(this.state.form)
                    );
                })
                .catch((err) => {
                    this.setState({
                        error: ErrorBusiness.errorGet(err),
                    });
                });
        } else {
            MigrationValidation.validate(
                SiteBusiness.fieldChecks(
                    this.state.form.wp,
                    this.props.siteIdentity.identity.identity,
                    this.props.user
                ),
                {
                    abortEarly: false,
                }
            )
                .then(() => {
                    this.props.dispatch(
                        SiteCreateAction.sitePost(this.state.form)
                    );
                })
                .catch((err) => {
                    this.setState({
                        error: ErrorBusiness.errorGet(err),
                    });
                });
        }
    };

    /* Getting data in this component's state */
    siteDataGet = (name, value, dataLocation = "site") => {
        const errorUpdate = ErrorBusiness.errorRemove(this.state.error, name);
        this.setState({
            error: errorUpdate,
        });
        const { form } = this.state;
        if (dataLocation === "site") {
            form.wp[name] = value;
            this.setState({
                form: {
                    ...form,
                },
            });
        } else {
            form[name] = value;
            this.setState({
                form: {
                    ...form,
                },
            });
        }
    };

    /* migation form function if you open migration link*/
    migrationOpenFunction = () => {
        const migrationParam = this.props.match.params.migration;
        const { form } = this.state;
        if (migrationParam) {
            form.wp.is_migration = true;
            this.setState({ form, env_status: 2 });
        }
    };

    /* Environment selection function  */
    environmentSelectionFunction = (status) => {
        const { form } = this.state;
        form.wp.is_migration = status === 1 ? false : true;
        this.setState({
            form,
            env_status: status,
        });
    };
    cardToggleModal = () => {
        const { card_modal } = this.state;
        this.setState({
            card_modal: !card_modal,
        });
    };

    render() {
        const { env_status, form } = this.state;
        const { siteIdentity, migration, cardList, user } = this.props;

        return (
            <React.Fragment>
                {cardList.success ? (
                    <SiteCreateMessageComponent
                        cardList={cardList.card_list}
                        cardModalFunction={this.cardToggleModal}
                    />
                ) : (
                    ""
                )}{" "}
                <TemplateMain>
                    <Container className="createsite-page">
                        <TemplateSideRight>
                            <div className="box-left" id="box-left">
                                <EnvironmentComponent
                                    environment={env_status}
                                    environmentSelect={
                                        this.environmentSelectionFunction
                                    }
                                />
                                <Form onSubmit={this.siteLaunchFunction}>
                                    {this.state.env_status === 1 ? (
                                        <SiteCreateForm
                                            form={this.state.form}
                                            dataGet={this.siteDataGet}
                                            user={user}
                                            siteIdentity={siteIdentity}
                                            error={this.state.error}
                                            cloudProvider={
                                                form.wp.cloud_provider
                                            }
                                            addons={this.state.form.addons}
                                        />
                                    ) : (
                                        <MigrationComponent
                                            migration={migration}
                                            dataGet={this.siteDataGet}
                                            error={this.state.error}
                                            addons={this.state.form.addons}
                                        />
                                    )}
                                </Form>
                            </div>

                            <SiteAddonComponent
                                dataGet={this.siteDataGet}
                                environment={env_status}
                                siteLaunch={this.siteLaunchFunction}
                                cloudProvider={form.wp.cloud_provider}
                                planId={parseInt(form.wp.plan)}
                            />
                        </TemplateSideRight>{" "}
                    </Container>{" "}
                    <AddCardModal
                        show={this.state.card_modal}
                        onHide={this.cardToggleModal}
                    />
                </TemplateMain>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        siteCreate: state.site.site.create,
        migration: state.migration,
        siteIdentity: state.site.site.siteIdentity,
        cardList: state.cardList,
    };
}
export default connect(mapStateToProps)(SiteCreateComponent);
