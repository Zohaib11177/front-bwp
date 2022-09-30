import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap';
import 'Assets/css/createsite.css';
import 'Assets/css/form.css';
import TemplateSideRight from 'Templates/TemplateSidebarRight';
import TemplateMain from 'Templates/TemplateMain';
import TemplateFull from 'Templates/TemplateFull';
import InputTextField from 'Components/Forms/Fields/InputTextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faInfoCircle } from '@fortawesome/fontawesome-free-solid';
import { connect } from 'react-redux';
import SiteAddonAction from 'Redux/V1/Sites/Site/SiteAddon/SiteAddonAction';
import SiteCreateAction from 'Redux/V1/Sites/Site/Post/SitePostAction';
import SiteBusiness from 'Businesses/SiteBusiness';
import AddCardModal from 'Components/Billings/AddCardModal';
import CardListAction from 'Redux/V1/Billing/Card/Get/CardGetAction';
import UsernameHelper from 'Helpers/UsernameHelper';
import PasswordHelper from 'Helpers/PasswordHelper';
import MigrationForm from 'Components/Forms/MigrationForm';
import { faWallet } from '@fortawesome/fontawesome-free-solid';
import SiteLaunchValidation from 'Validations/SiteLaunchValidation';
import Capitilize from 'Helpers/CapitilizeHelper';
import ToastHelper from 'Helpers/ToastHelper';
import SiteIdentityAction from 'Redux/V1/Sites/Site/SiteIdentity/SiteIdentityAction';
import SiteRegionAction from 'Redux/V2/Sites/Site/SiteRegion/SiteRegionAction';
import SiteDatabaseAction from 'Redux/V1/Sites/Site/SiteDatabase/SiteDatabaseAction';
// import Configs from "Configs";
import RoundUpHelper from 'Helpers/RoundUpHelper';
import ToolTipComponent from 'Components/UI/ToolTipComponent';
import 'Assets/css/Responsive/SiteLaunch.css';
const renderTooltip = (props) => (
    <Tooltip className="button-tooltip" {...props}>
        <a
            href="https://docs.bionicwp.com/knowledgebase/database-selection-mariadb-10-1-45-mysql-8-0-22/"
            target="_">
            <div className="tooltip1">
                <p>
                    Can't decide what to select{' '}
                    <span
                        style={{
                            textDecoration: 'underline',
                        }}>
                        {' '}
                        click here{' '}
                    </span>
                </p>
            </div>
        </a>
    </Tooltip>
);
class CreateSiteComponent extends Component {
    state = {
        form: {
            user_addons: [],
            user_addons_name: [],
            wp: {
                username: UsernameHelper.generateUserName(
                    this.props.user.email
                ),
                password: PasswordHelper.generatePassword(12),
                title: this.props.siteIdentity.identity,
                email: this.props.user.email,
                region_id: '',
                wp_admin_user: null,
                wp_admin_password: null,
                wp_admin_url: null,
                current_host_name: null,
                current_host_username: null,
                current_host_password: null,
                select_ftp_sftp: 2,
                port: null,
                host_location: null,
                mi_username: null,
                mi_password: null,
                multi_site: null,
                important_dir_root: null,
                agency_name: null,
                domain_url: null,
                domain_username: null,
                domain_password: null,
                hear_about_us: null,
                mi_directories: null,
                is_migration: false,
                mi_staging: false,
                suggested_identity: this.props.siteIdentity.identity,
                site_db: 1,
                schema_error: null,
            },
            mandatory_addons: [],
            card_id: null,
        },
        card_modal: false,
        product_loading: false,
        selected_addons: [],
        status1: 1,
        ftpColor: 'white',
        sftpColor: '#007bff',
        unique_name: true,
        error: null,
        db_error: null,
        float: {
            top: '',
            position: '',
        },
    };
    radioHandler = (status1) => {
        const { form } = this.state;
        form.wp.is_migration = status1 === 1 ? false : true;
        this.setState({ status1, form });
    };

    handleChange = (event) => {
        const target = event.target;
        const { form } = this.state;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        form.wp[name] = value;

        this.setState({
            form: {
                ...form,
            },
        });
        if (this.state.form.wp.region_id) {
            this.setState({
                error: null,
            });
        }
        if (this.state.form.wp.site_db) {
            this.setState({
                db_error: null,
            });
        }
        try {
            if (this.state.form.wp.important_dir_root === '0') {
                this.setState({
                    form: {
                        ...form,
                        wp: {
                            ...form.wp,
                            mi_directories: '',
                        },
                    },
                });
            }
        } catch {
            console.log('Error: migration form not there');
        }
    };

    handleScroll = (event) => {
        let windowWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        let footerHeight = document.getElementById('footer').scrollHeight;
        let boxLeft = document.getElementById('box-left').scrollHeight;
        let header = document.getElementById('header').scrollHeight;
        let checkScroll = boxLeft - (footerHeight + header);

        if (this.state.form.wp.is_migration === true && windowWidth > 600) {
            if (window.scrollY < 160) {
                this.setState({
                    float: {
                        position: '',
                        top: '',
                        width: '323px',
                    },
                });
            } else if (window.scrollY > 160 && window.scrollY < checkScroll) {
                this.setState({
                    float: {
                        position: 'fixed',
                        top: '0px',
                        width: '323px',
                    },
                });
            } else {
                this.setState({
                    float: {
                        ...this.state.float,
                        position: 'fixed',
                        top: 'unset',
                        width: '323px',
                        bottom: `${footerHeight + 23}px`,
                    },
                });
            }
        } else {
            this.setState({
                float: {
                    position: 'unset',
                    top: '',
                    width: '',
                },
            });
        }
    };
    componentDidMount = () => {
        this.props.dispatch(SiteIdentityAction.siteIdentity());
        this.props.dispatch(SiteRegionAction.siteRegion());
        this.props.dispatch(SiteAddonAction.siteAddon());
        this.props.dispatch(CardListAction.cardGet());
        this.props.dispatch(SiteDatabaseAction.siteDatabase());
        window.addEventListener('scroll', this.handleScroll);
        this.CardPopUpFunction();
    };

    launchSite = (e) => {
        e.preventDefault();
        if (
            this.state.form.wp.region_id === '' ||
            this.state.form.wp.region_id === 'Select Region'
        ) {
            this.setState({
                error: 'Field is required',
            });
        } else if (
            this.state.form.wp.site_db === '' ||
            this.state.form.wp.site_db === 'Select Database'
        ) {
            this.setState({
                db_error: 'Field is required',
            });
        } else {
            SiteLaunchValidation.isValid(this.state.form.wp)
                .then((res) => {
                    if (!res) {
                        // ToastHelper.error("Form is not valid");
                    } else {
                        this.props.dispatch(
                            SiteCreateAction.sitePost(this.state.form)
                        );
                    }
                })
                .catch((err) => {
                    ToastHelper.error();
                });
        }
    };

    cardToggleModal = () => {
        const { card_modal } = this.state;
        this.setState({
            card_modal: !card_modal,
        });
    };

    calculateCost = (userAddons = this.state.form.user_addons) => {
        SiteBusiness.calculateCost(this.props.siteAddon.products, userAddons);

        this.setState({ product_loading: true });
    };

    setCardId = (e) => {
        const { form } = this.state;
        if (e === undefined) {
            const mandatoryAddons = SiteBusiness.getMandatoryItems(
                this.props.siteAddon.products
            );

            const userAddons = SiteBusiness.getDefaultItems(
                this.props.siteAddon.products,
                'id'
            );

            const userAddonsName = SiteBusiness.getDefaultItems(
                this.props.siteAddon.products,
                'name'
            );

            const selectedAddons = SiteBusiness.getDefaultItems(
                this.props.siteAddon.products
            );

            const cardId = this.props.primary_card.id || null;
            // if (cardId === null) {
            //     setTimeout(() => {
            //         this.setCardId();
            //     }, 1000);
            // }
            this.setState({
                form: {
                    ...form,
                    card_id: cardId,
                    mandatory_addons: mandatoryAddons,
                    user_addons: userAddons,
                    user_addons_name: userAddonsName,
                    mi_staging: false,
                },
                selected_addons: selectedAddons,
            });
            // this.calculateCost(userAddons);
        } else {
            this.setState({
                form: {
                    ...form,
                    card_id: parseInt(e.target.value) || null,
                },
            });
            this.calculateCost();
        }
    };

    getCosting = (target) => {
        return SiteBusiness.getCost(
            this.props.siteCosting.site_costing,
            target
        );
    };

    addonsSelection = (id, name) => {
        const { form } = this.state;
        const index = form.user_addons.indexOf(parseInt(id));
        const productName = name;

        if (index < 0) {
            form.user_addons.push(parseInt(id));
            form.user_addons_name.push(productName);
        } else {
            form.user_addons.splice(index, 1);
            form.user_addons_name.splice(index, 1);
        }
        this.setState({ form });
        this.calculateCost();
        this.userSelectedAddons();
    };

    userSelectedAddons = () => {
        const selectedAddons = SiteBusiness.userSelectedAddons(
            this.props.siteAddon.products,
            this.state.form.user_addons
        );

        this.setState({ selected_addons: selectedAddons });
    };

    userSelectedAddonTodayPrice = (addonId, amount = 'next_billing') => {
        const addons = this.props.siteCosting.site_costing.filter((item) => {
            return item.product_id === addonId;
        });
        if (addons.length > 0 && amount === 'next_billing') {
            return addons[0].amount_till_next_billing;
        } else if (addons.length > 0 && 'base') {
            return addons[0].amount_net;
        }
        return 0;
    };

    cardLists = () => {
        return this.props.card_list.map((card) => {
            return (
                <option value={card.id} selected={card.is_primary}>
                    {card.number}
                </option>
            );
        });
    };
    regionList = () => {
        return this.props.region.region.map((region) => {
            return (
                <option value={region.id}>
                    {Capitilize.capital(region.location)}
                </option>
            );
        });
    };
    sitedbList = () => {
        return this.props.site_db.site_db.map((site_db) => {
            return (
                <option value={site_db.id} selected={site_db.default}>
                    {Capitilize.capital(site_db.db_name)}
                </option>
            );
        });
    };

    setDefaultDbId = () => {
        const defaultDB = this.props.site_db.site_db.filter((db) => {
            return db.default === true;
        });

        return defaultDB.length > 0 ? defaultDB[0].id : null;
    };

    // If user visit on launch site page this function will check add card is added or not

    CardPopUpFunction = () => {
        setTimeout(() => {
            if (this.props.card_list.length === 0) {
                this.cardToggleModal();
            }
        }, 2500);
    };

    render() {
        const baseCost =
            this.userSelectedAddonTodayPrice(1, 'base') +
            this.userSelectedAddonTodayPrice(2, 'base');

        const migrationParam = this.props.match.params.migration;

        if (migrationParam) {
            // eslint-disable-next-line
            this.state.status1 = 2;
        }
        // const { status1 } = this.state;
        if (this.state.unique_name === true) {
            if (this.props.siteIdentity.identity.identity === undefined) {
                this.setState({
                    ...this.state,
                    form: {
                        ...this.state.form,
                        wp: {
                            ...this.state.form.wp,
                            title: 'Loading...',
                        },
                    },
                    unique_name: false,
                });
                setTimeout(() => {
                    this.setState({
                        ...this.state,
                        form: {
                            ...this.state.form,
                            wp: {
                                ...this.state.form.wp,
                                username: UsernameHelper.generateUserName(
                                    this.props.user.email
                                ),
                                password: PasswordHelper.generatePassword(12),
                                title: this.props.siteIdentity.identity
                                    .identity,
                                email: this.props.user.email,
                                suggested_identity: this.state.form.wp.title,
                                region_id: '',
                                site_db: this.setDefaultDbId(),
                            },
                        },
                        unique_name: false,
                    });
                }, 1000);
            }
        }

        const { wallet } = this.props;
        let walletAmount;

        const { wp } = this.state.form;
        const addons =
            SiteBusiness.getAddons(this.props.siteAddon.products) || [];
        if (
            this.props.siteAddon.products.length > 0 &&
            this.state.product_loading === false
        ) {
            this.calculateCost();
            this.setCardId();
        }

        try {
            if (this.props.siteCreate.success) {
                walletAmount =
                    wallet.current_balance - this.getCosting('total');
                if (walletAmount < 0) {
                    walletAmount = 0;
                }
                this.props.wallet.current_balance = walletAmount;
                localStorage.setItem(
                    'wallet',
                    JSON.stringify(this.props.wallet)
                );
                this.props.siteCreate.success = false;
            }
        } catch {
            console.log('Wallet is empty');
        }
        const allAddons = addons.map((addon) => {
            let permanentCheck;
            if (addon.default === true && addon.mandatory === true) {
                permanentCheck = true;
            } else {
                permanentCheck = false;
            }
            return (
                <Row key={addon.id} className="mb-1">
                    <Col lg={7} xs={7}>
                        <Form.Check
                            className={`${
                                permanentCheck ? 'event-none ' : ''
                            } ${addon.bold ? 'font-bold' : ''}`}
                            type="checkbox"
                            id={`check-api-${addon.id}`}>
                            <Form.Check.Input
                                type="checkbox"
                                isValid
                                value={addon.id}
                                data-product={addon.name}
                                defaultChecked={
                                    permanentCheck
                                        ? permanentCheck
                                        : addon.default
                                }
                                onChange={() =>
                                    this.addonsSelection(addon.id, addon.name)
                                }
                            />
                            <Form.Check.Label>{addon.name}</Form.Check.Label>
                        </Form.Check>
                    </Col>
                    <Col lg={2} xs={2}>
                        <ToolTipComponent
                            containerClasses="addon-tooltip"
                            type="info"
                            text={addon.description}
                        />
                    </Col>
                    <Col lg={3} xs={3} className="text-right">
                        $
                        {addon.cost
                            ? addon.cost.toFixed(2)
                            : RoundUpHelper.twodecimalplace(addon.cost)}
                    </Col>
                </Row>
            );
        });

        return (
            <React.Fragment>
                <TemplateMain onScroll={this.addonFixedFunction}>
                    <Container className="createsite-page">
                        <form
                            id="launch-site"
                            method="POST"
                            onSubmit={this.launchSite}
                            novalidate>
                            <TemplateFull>
                                {/* <div className="page-header">Create Site</div> */}
                                <div className="page-header">
                                    Environment Selection
                                </div>
                            </TemplateFull>
                            <TemplateSideRight>
                                <div className="box-left" id="box-left">
                                    <div className="box">
                                        <section className="environment-plan row">
                                            <input
                                                type="radio"
                                                name="site_type"
                                                id="new"
                                                value="new"
                                                checked={
                                                    this.state.status1 === 1
                                                        ? true
                                                        : false
                                                }
                                                onClick={(e) =>
                                                    this.radioHandler(1)
                                                }
                                            />
                                            <label
                                                className="col-md-4"
                                                htmlFor="new">
                                                Install WordPress
                                            </label>
                                            <input
                                                type="radio"
                                                name="site_type"
                                                id="clone"
                                                value="clone"
                                                checked={
                                                    this.state.status1 === 2
                                                        ? true
                                                        : false
                                                }
                                                onClick={(e) =>
                                                    this.radioHandler(2)
                                                }
                                            />
                                            <label
                                                className="col-md-4"
                                                htmlFor="clone">
                                                Migrate My Site
                                            </label>
                                        </section>
                                    </div>

                                    <div className="page-header">
                                        Site Information
                                    </div>
                                    <div
                                        className="box form-container"
                                        id="registration-form">
                                        {/* <Row className="d-none">
                                            <Col lg="4">
                                                <InputTextField
                                                    name="Your Domain Name"
                                                    id="domainname"
                                                />
                                            </Col>
                                            <Col lg="4">
                                                <InputTextField
                                                    name="Name of this site"
                                                    id="sitename"
                                                />
                                            </Col>
                                            <Col lg="4">
                                                <InputTextField
                                                    name="Location"
                                                    id="location"
                                                />
                                            </Col>
                                        </Row> */}
                                        <p className="text-field d-none">
                                            You can choose between 20 data
                                            center locations, which allows you
                                            to place your website in a
                                            geographical location closest to
                                            your visitors.
                                        </p>

                                        <div className="page-inner-header">
                                            WordPress Information
                                        </div>
                                        <Row>
                                            <Col lg="6">
                                                <InputTextField
                                                    name="title"
                                                    id="title"
                                                    label="WordPress Site Title"
                                                    getChange={
                                                        this.handleChange
                                                    }
                                                    value={wp.title || ''}
                                                    schema={
                                                        SiteLaunchValidation
                                                    }
                                                />
                                            </Col>
                                            <Col lg="6" id="check-username">
                                                <InputTextField
                                                    label="WordPress Admin Username"
                                                    id="username"
                                                    name="username"
                                                    getChange={(e) =>
                                                        this.handleChange(e)
                                                    }
                                                    value={wp.username}
                                                    schema={
                                                        SiteLaunchValidation
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                lg="6"
                                                className="wp-password-freeze mt-2">
                                                <InputTextField
                                                    label="WordPress Admin Password"
                                                    id="password"
                                                    name="password"
                                                    getChange={
                                                        this.handleChange
                                                    }
                                                    value={wp.password}
                                                    schema={
                                                        SiteLaunchValidation
                                                    }
                                                    disabled
                                                />
                                            </Col>
                                            <Col lg="6" className="mt-2">
                                                <InputTextField
                                                    label="WordPress Admin Email"
                                                    id="email"
                                                    name="email"
                                                    getChange={
                                                        this.handleChange
                                                    }
                                                    value={wp.email}
                                                    schema={
                                                        SiteLaunchValidation
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            {' '}
                                            <Col lg="6" className="mt-2">
                                                <select
                                                    name="region_id"
                                                    required
                                                    className={`form-control cursor-pointer ${
                                                        this.state.error
                                                            ? 'error-input text-danger'
                                                            : ''
                                                    }`}
                                                    value={
                                                        this.state.form.wp
                                                            .region_id
                                                    }
                                                    schema={
                                                        SiteLaunchValidation
                                                    }
                                                    onChange={
                                                        this.handleChange
                                                    }>
                                                    <option>
                                                        Select Region
                                                    </option>
                                                    {this.regionList()}
                                                </select>
                                                {this.state.error ? (
                                                    <p className="text-danger text-right mt-1">
                                                        {this.state.error}
                                                    </p>
                                                ) : (
                                                    ''
                                                )}
                                            </Col>
                                            <Col lg="6" className="mt-2">
                                                {/* <OverlayTrigger
													placement="bottom"
													overlay={renderTooltip}
												>
													<img
														src="/assets/img/tooltipicon.svg"
														alt="tooltipicon"
														className="tooltip-icon"
													/>
												</OverlayTrigger> */}
                                                <OverlayTrigger
                                                    placement="bottom"
                                                    delay={{
                                                        show: 10,
                                                        hide: 900,
                                                    }}
                                                    overlay={renderTooltip}>
                                                    <button
                                                        type="button"
                                                        class="btn btn-link db-info">
                                                        <FontAwesomeIcon
                                                            icon={faInfoCircle}
                                                            className="wallet-icon db-info-icon"
                                                        />{' '}
                                                    </button>
                                                </OverlayTrigger>

                                                <select
                                                    name="site_db"
                                                    required
                                                    className={`form-control cursor-pointer ${
                                                        this.state.db_error
                                                            ? 'error-input text-danger'
                                                            : ''
                                                    }`}
                                                    value={
                                                        this.state.form.wp
                                                            .site_db
                                                    }
                                                    onChange={
                                                        this.handleChange
                                                    }>
                                                    <option>
                                                        Select Database
                                                    </option>

                                                    {/* <option>Maria DB</option>
													<option>My SQL 8</option> */}
                                                    {this.sitedbList()}
                                                </select>
                                                {this.state.db_error ? (
                                                    <p className="text-danger text-right mt-1">
                                                        {this.state.db_error}
                                                    </p>
                                                ) : (
                                                    ''
                                                )}
                                            </Col>
                                        </Row>
                                        <Row>
                                            {/* GCP Link Section  */}
                                            <Col className="col-lg-12 billing-box mt-2">
                                                <p className="mb-0">
                                                    Can't decide where to launch
                                                    your site please{' '}
                                                    <a
                                                        target="_"
                                                        href="http://www.gcping.com/">
                                                        {' '}
                                                        click here...{' '}
                                                    </a>
                                                </p>
                                            </Col>
                                            {/* GCP Link Section  */}
                                        </Row>
                                    </div>

                                    <div
                                        style={{
                                            display:
                                                this.state.status1 === 2
                                                    ? 'block'
                                                    : 'none',
                                        }}>
                                        <div className="page-header">
                                            Migration Information
                                        </div>
                                        <div
                                            className="box migration-form form-container "
                                            id="registration-form">
                                            <div className="migration-text migrate-text">
                                                If you would like our experts to
                                                migrate this site for you please
                                                fill out all of the following
                                                information:
                                            </div>
                                            {this.state.status1 === 2 ? (
                                                <MigrationForm
                                                    dis={this.props.dispatch}
                                                    form={this.state.form.wp}
                                                    handleChange={
                                                        this.handleChange
                                                    }
                                                    migration={
                                                        this.props.migration
                                                    }
                                                    changeColor={
                                                        this.changeColor
                                                    }
                                                    ftpColor={
                                                        this.state.ftpColor
                                                    }
                                                    sftpColor={
                                                        this.state.sftpColor
                                                    }
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="box-right"
                                    id="box-right"
                                    style={{
                                        position: this.state.float.position,
                                        top: this.state.float.top,
                                        bottom: this.state.float.bottom,
                                        width: this.state.float.width,
                                    }}>
                                    <div className="box">
                                        <div className="box-header">Addons</div>
                                        <div className="additional-checkbox">
                                            {allAddons}
                                        </div>

                                        {/*<hr />
                                     <div className="page-inner-header">
                                        Free Addons
                                    </div>
                                    <div className="additional-checkbox">
                                        <Form>
                                            {["checkbox"].map((type) => (
                                                <div
                                                    key={type}
                                                    className="mb-1"
                                                >
                                                    <Form.Check
                                                        type={type}
                                                        id="WooCommerce"
                                                    >
                                                        <Form.Check.Input
                                                            type={type}
                                                        />
                                                        <Form.Check.Label>
                                                            Install WooCommerce
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </div>
                                            ))}
                                        </Form>
                                    </div>
                                    <div className="additional-checkbox">
                                        <Form>
                                            {["checkbox"].map((type) => (
                                                <div
                                                    key={type}
                                                    className="mb-1"
                                                >
                                                    <Form.Check
                                                        type={type}
                                                        id="Elementor"
                                                    >
                                                        <Form.Check.Input
                                                            type={type}
                                                        />
                                                        <Form.Check.Label>
                                                            Install Elementor
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </div>
                                            ))}
                                        </Form>
                                    </div>
                                */}
                                    </div>
                                    <div className="box">
                                        <div className="box-header">
                                            Billing Information
                                        </div>
                                        <div className="billing-box mt-2">
                                            <Row>
                                                <Col lg="8" className="col-8">
                                                    <p className="mb-0 font-bold">
                                                        Base Cost
                                                    </p>
                                                </Col>
                                                <Col
                                                    lg="4"
                                                    className="text-right col-4">
                                                    <p className="mb-0 font-bold">
                                                        {baseCost.toFixed(2) <=
                                                        0 ? (
                                                            <span className="free-text">
                                                                Free
                                                            </span>
                                                        ) : (
                                                            '$' +
                                                            ' ' +
                                                            baseCost.toFixed(2)
                                                        )}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                        {this.state.selected_addons.map(
                                            (addon) => {
                                                return (
                                                    <div className="billing-box mt-2">
                                                        <Row>
                                                            <Col
                                                                lg="8"
                                                                className="col-8">
                                                                {addon.name}
                                                            </Col>
                                                            <Col
                                                                lg="4"
                                                                className="text-right col-4">
                                                                {this.userSelectedAddonTodayPrice(
                                                                    addon.id
                                                                ).toFixed(2) <=
                                                                0 ? (
                                                                    <span className="free-text">
                                                                        Free
                                                                    </span>
                                                                ) : (
                                                                    '$' +
                                                                    ' ' +
                                                                    this.userSelectedAddonTodayPrice(
                                                                        addon.id
                                                                    ).toFixed(2)
                                                                )}
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                );
                                            }
                                        )}

                                        <hr />

                                        <div className="billing-box mt-3">
                                            <Row>
                                                <Col lg="8" className="col-8">
                                                    Total
                                                </Col>
                                                <Col
                                                    lg="4"
                                                    className="text-right col-4">
                                                    $ {this.getCosting('total')}
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="billing-box mt-3">
                                            <Row>
                                                <Col lg="8" className="col-8">
                                                    Due Today
                                                </Col>
                                                <Col
                                                    lg="4"
                                                    className="text-right col-4">
                                                    {this.getCosting('today') <=
                                                    0 ? (
                                                        <span className="free-text">
                                                            Free
                                                        </span>
                                                    ) : (
                                                        '$' +
                                                        ' ' +
                                                        this.getCosting('today')
                                                    )}
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="page-inner-header mt-3">
                                            Payment Method
                                        </div>
                                        <Row>
                                            <Col md={7} className="col-7">
                                                <FontAwesomeIcon
                                                    icon={faWallet}
                                                    className="wallet-icon"
                                                />
                                                &nbsp;Wallet
                                            </Col>
                                            <Col md={5} className="text-right">
                                                $
                                                {this.props.siteCreate.success
                                                    ? parseFloat(
                                                          walletAmount
                                                      ).toFixed(2)
                                                    : parseFloat(
                                                          wallet.current_balance
                                                      ).toFixed(2)}
                                                {/* {wallet.current_balance} */}
                                            </Col>
                                        </Row>

                                        <div className="billing-box mt-3">
                                            <Row>
                                                <Col
                                                    lg="10"
                                                    className="credit-card form-group col-10">
                                                    <select
                                                        className="form-control"
                                                        onChange={
                                                            this.setCardId
                                                        }>
                                                        <option>
                                                            Credit Card
                                                        </option>
                                                        {this.cardLists()}
                                                    </select>
                                                    {/* <ReactSVG src="assets/img/visa.svg" /> */}
                                                </Col>

                                                <Col
                                                    lg="2"
                                                    className="card-num text-right col-2">
                                                    <Button
                                                        variant="link"
                                                        className="pencil-icon"
                                                        onClick={
                                                            this.cardToggleModal
                                                        }>
                                                        <FontAwesomeIcon
                                                            icon={faPencilAlt}
                                                        />
                                                    </Button>
                                                </Col>
                                                <Col lg="12">
                                                    <button
                                                        type="sumbit"
                                                        className={`btn btn-primary  ${
                                                            this.props
                                                                .siteCreate
                                                                .loading
                                                                ? 'loading'
                                                                : ''
                                                        }`}
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center',
                                                            backgroundColor:
                                                                'rgb(22, 101, 216)',
                                                        }}>
                                                        {this.state.status1 ===
                                                        2
                                                            ? 'Migrate My Site'
                                                            : 'Launch Site'}
                                                    </button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </TemplateSideRight>
                        </form>
                    </Container>
                </TemplateMain>
                <AddCardModal
                    show={this.state.card_modal}
                    onHide={this.cardToggleModal}
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        siteAddon: state.site.site.siteAddon,
        siteCosting: state.site.site.siteCosting,
        card_list: state.cardList.card_list,
        primary_card: state.cardList.primary_card,
        user: state.login.user,
        siteCreate: state.site.site.create,
        migration: state.migration,
        wallet: state.login.wallet,
        siteIdentity: state.site.site.siteIdentity,
        region: state.site.site.siteRegion,
        site_db: state.site.site.siteDatabase,
    };
}
export default connect(mapStateToProps)(CreateSiteComponent);
